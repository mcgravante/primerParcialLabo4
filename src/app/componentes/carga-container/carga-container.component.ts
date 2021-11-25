import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { Producto } from 'src/app/clases/producto';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-carga-container',
  templateUrl: './carga-container.component.html',
  styleUrls: ['./carga-container.component.scss']
})
export class CargaContainerComponent implements OnInit {
  containerSeleccionado: Container;
  productoSeleccionado: Producto;
  listaContainers: Container[] = [];

  constructor(public containerService: ContainerService) { }

  ngOnInit(): void {
    let arrayContainers = [];
    let listaContainersSubscription = this.containerService.getContainers().subscribe((containers: any) => {
      for (let index = 0; index < containers.length; index++) {
        let container: Container = containers[index].payload.doc.data();
        if (containers[index].payload.doc.data().productosCargados) {
          let productosCargados = JSON.parse(containers[index].payload.doc.data().productosCargados)
          container.productosCargados = productosCargados;
        }
        arrayContainers.push(container);
      }
      this.listaContainers = arrayContainers;
      listaContainersSubscription.unsubscribe();
    })
  }

  cambiarContainer(container: Container) {
    this.containerSeleccionado = container;
  }

  cargoContainer(container: Container) {
    let indexToUpdate;
    this.listaContainers.forEach((element, index) => {
      if (element.codigo == container.codigo) {
        indexToUpdate = index;
      }
    });
    this.listaContainers[indexToUpdate] = container;
    this.containerSeleccionado = null;
  }

  borroContainer(container: Container) {
    this.listaContainers.forEach((element, index) => {
      if (element.codigo == container.codigo) this.listaContainers.splice(index, 1);
    });
    this.containerSeleccionado = null;

  }

  agregoContainer(container: Container) {
    this.listaContainers.push(container);
  }

  limpiarDetalle() {
    this.containerSeleccionado = null;
  }

  cambiarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

}
