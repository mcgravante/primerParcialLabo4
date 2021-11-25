import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Container } from 'src/app/clases/container';
import { Producto } from 'src/app/clases/producto';
import { ContainerService } from 'src/app/servicios/container.service';
import { ProductoService } from 'src/app/servicios/producto.service';

const validarCantidades: ValidatorFn = (formularioCargaProducto: FormGroup) => {
  let stock = formularioCargaProducto.controls['stock'].value;
  let capacidad = formularioCargaProducto.controls['capacidad'].value;
  let cantidad = formularioCargaProducto.controls['cantidad'].value;

  if (cantidad > stock) {
    return { excedeStock: true };
  }
  else if (cantidad > capacidad) {
    return { excedeCapacidad: true };
  }
  else {
    return null
  }
}

@Component({
  selector: 'app-cargar-producto-en-container',
  templateUrl: './cargar-producto-en-container.component.html',
  styleUrls: ['./cargar-producto-en-container.component.scss']
})
export class CargarProductoEnContainerComponent implements OnChanges {
  @Input() containerParaCargar: Container;
  @Input() productoParaCargar: Producto;
  @Output() seCargoContainer: EventEmitter<any> = new EventEmitter<any>();
  arrayProductosCargados: Producto[] = [];
  formularioCargaProducto: FormGroup;


  constructor(private productoService: ProductoService, private containerService: ContainerService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioCargaProducto = fb.group({
      container: ["", Validators.required],
      capacidad: ["", Validators.required],
      producto: ["", Validators.required],
      stock: ["", Validators.required],
      cantidad: ["", Validators.required]
    }, { validator: validarCantidades })
  }

  ngOnChanges(): void {
    if (this.containerParaCargar) {
      let containerSubscription = this.containerService.getContainer(this.containerParaCargar).subscribe((containers: any) => {
        let container: Container = containers[0].payload.doc.data();
        this.formularioCargaProducto.controls['container'].setValue(container.marca);
        this.formularioCargaProducto.controls['capacidad'].setValue(container.capacidad);
        containerSubscription.unsubscribe();
      })
    }
    if (this.productoParaCargar) {
      let productoSubscription = this.productoService.getProducto(this.productoParaCargar).subscribe((productos: any) => {
        let producto: Producto = productos[0].payload.doc.data();
        this.formularioCargaProducto.controls['producto'].setValue(producto.descripcion);
        this.formularioCargaProducto.controls['stock'].setValue(producto.stock);
        productoSubscription.unsubscribe();
      })
    }
  }

  cargarContainer() {
    let cantidad = this.formularioCargaProducto.controls['cantidad'].value;

    let productoCargado = new Producto(this.productoParaCargar.codigo, this.productoParaCargar.descripcion, this.productoParaCargar.precio, cantidad, this.productoParaCargar.pais, this.productoParaCargar.comestible);
    let container = new Container(this.containerParaCargar.codigo, this.containerParaCargar.marca, this.containerParaCargar.capacidad - cantidad, this.containerParaCargar.productosCargados);
    if (!container.productosCargados) {
      container.productosCargados = [];
    }
    container.productosCargados.push(productoCargado);
    let producto = new Producto(this.productoParaCargar.codigo, this.productoParaCargar.descripcion, this.productoParaCargar.precio, this.productoParaCargar.stock - cantidad, this.productoParaCargar.pais, this.productoParaCargar.comestible)

    this.containerService.actualizoProductosContainer(container);
    this.productoService.cambiarDatosProducto(producto);

    this.showSuccess();
    this.seCargoContainer.emit(container);
  }

  showSuccess() {
    this.toastr.success('Se cargó producto correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
