import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  repartidores;

  constructor(private firestore: AngularFirestore) {
    this.repartidores = this.firestore.collection("repartidores").snapshotChanges();
  }

  getRepartidores() {
    return this.firestore.collection("repartidores").snapshotChanges();
  }

  getRepartidor(key: string) {
    return this.firestore.collection("repartidores").doc(key).valueChanges();
  }

  guardarRepartidor(repartidor: Repartidor) {
    return this.firestore.collection("repartidores").add({
      dni: repartidor.dni,
      nombre: repartidor.nombre,
      edad: repartidor.edad,
      capacidadDeTransporte: repartidor.capacidadDeTransporte,
      pais: repartidor.pais,
      unidadPropia: repartidor.unidadPropia
    });
  }
}
