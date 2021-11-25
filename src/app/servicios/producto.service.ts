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

  getProducto(producto: Producto) {
    return this.firestore.collection("productos", ref => ref.where('codigo', '==', producto.codigo)).snapshotChanges();
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

  cambiarDatosProducto(producto: Producto) {
    let doc = this.getProducto(producto).subscribe((productos: any) => {
      const productoId = productos[0].payload.doc.id;
      var productoForUpdate = this.firestore.collection("productos").doc(productoId);
      productoForUpdate.update({
        stock: producto.stock
      })
        .then(() => { })
        .catch((error) => { });
      doc.unsubscribe()
    })
  }
}
