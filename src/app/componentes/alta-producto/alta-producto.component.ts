import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {
  formularioAlta: FormGroup;

  constructor(private productoService: ProductoService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioAlta = fb.group({
      codigo: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required],
      stock: ["", Validators.required],
      pais: ["", Validators.required],
      comestible: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre: string) {
    this.formularioAlta.controls['pais'].setValue(paisNombre);
  }

  guardarProducto() {
    let codigo = this.formularioAlta.controls['codigo'].value;
    let descripcion = this.formularioAlta.controls['descripcion'].value;
    let precio = this.formularioAlta.controls['precio'].value;
    let stock = this.formularioAlta.controls['stock'].value;
    let pais = this.formularioAlta.controls['pais'].value;
    let comestible = this.formularioAlta.controls['comestible'].value;
    let producto = new Producto(codigo, descripcion, precio, stock, pais, comestible);
    this.productoService.guardarProducto(producto).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });;
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }
}
