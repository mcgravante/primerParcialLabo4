import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Container } from '../clases/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  containers;

  constructor(private firestore: AngularFirestore) {
    this.containers = this.firestore.collection("containers").snapshotChanges();
  }

  getContainers() {
    return this.firestore.collection("containers").snapshotChanges();
  }

  getContainer(container: Container) {
    return this.firestore.collection("containers", ref => ref.where('codigo', '==', container.codigo)).snapshotChanges();
  }

  guardarContainer(container: Container) {
    return this.firestore.collection("containers").add({
      codigo: container.codigo,
      marca: container.marca,
      capacidad: container.capacidad
    });
  }

  cambiarDatosContainer(container: Container) {
    let doc = this.getContainer(container).subscribe((containers: any) => {
      const containerId = containers[0].payload.doc.id;
      var containerForUpdate = this.firestore.collection("containers").doc(containerId);
      containerForUpdate.update({
        marca: container.marca,
        capacidad: container.capacidad,
      })
        .then(() => { })
        .catch((error) => { });
      doc.unsubscribe()
    })
  }

  actualizoProductosContainer(container: Container) {
    let doc = this.getContainer(container).subscribe((containers: any) => {
      const containerId = containers[0].payload.doc.id;
      var containerForUpdate = this.firestore.collection("containers").doc(containerId);
      containerForUpdate.update({
        capacidad: container.capacidad,
        productosCargados: JSON.stringify(container.productosCargados)
      })
        .then(() => { })
        .catch((error) => { });
      doc.unsubscribe()
    })
  }

  borrarContainer(container: Container) {
    let doc = this.getContainer(container).subscribe((containers: any) => {
      const containerId = containers[0].payload.doc.id;
      var containerForDelete = this.firestore.collection("containers").doc(containerId);
      containerForDelete.delete()
        .then(() => { })
        .catch((error) => { });
      doc.unsubscribe()
    })

  }


}
