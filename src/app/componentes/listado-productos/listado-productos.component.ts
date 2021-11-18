import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {
  @Output() seSeleccionoProducto: EventEmitter<any> = new EventEmitter<any>();


  listaProductos: Producto[] = [];

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    let arrayProductos = [];
    this.productoService.getProductos().subscribe((productos: any) => {
      for (let index = 0; index < productos.length; index++) {
        let producto: Producto = productos[index].payload.doc.data();
        arrayProductos.push(producto);
      }
      this.listaProductos = arrayProductos;
    })
  }

  SeleccionarProducto(producto: Producto) {
    this.seSeleccionoProducto.emit(producto);
  }

}
