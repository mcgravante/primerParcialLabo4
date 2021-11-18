import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {
  productoSeleccionado: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

}
