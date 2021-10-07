import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos;

  constructor(private firestore: AngularFirestore) {
    this.productos = this.firestore.collection("productos").snapshotChanges();
  }

  getProductos() {
    return this.firestore.collection("productos").snapshotChanges();
  }

  getProducto(key: string) {
    return this.firestore.collection("productos").doc(key).valueChanges();
  }

  guardarProducto(producto: Producto) {
    return this.firestore.collection("productos").add({
      codigo: producto.codigo,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      pais: producto.pais,
      comestible: producto.comestible
    });
  }
}
