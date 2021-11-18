import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.scss']
})
export class AbmContainerComponent implements OnInit {
  containerSeleccionado: Container;
  listaContainers: Container[] = [];

  constructor(public containerService: ContainerService) { }

  ngOnInit(): void {
    let arrayContainers = [];
    let listaContainersSubscription = this.containerService.getContainers().subscribe((containers: any) => {
      for (let index = 0; index < containers.length; index++) {
        let container: Container = containers[index].payload.doc.data();
        arrayContainers.push(container);
      }
      this.listaContainers = arrayContainers;
      listaContainersSubscription.unsubscribe();
    })
  }

  cambiarContainer(container: Container) {
    this.containerSeleccionado = container;
  }

  modificoContainer(container: Container) {
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

}
