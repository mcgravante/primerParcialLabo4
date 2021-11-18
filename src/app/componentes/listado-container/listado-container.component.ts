import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-listado-container',
  templateUrl: './listado-container.component.html',
  styleUrls: ['./listado-container.component.scss']
})
export class ListadoContainerComponent implements OnInit {
  @Output() seSeleccionoContainer: EventEmitter<any> = new EventEmitter<any>();

  @Input() listaContainers: Container[] = [];

  constructor(public containerService: ContainerService) { }

  ngOnInit(): void {
    
  }

  SeleccionarContainer(container: Container) {
    this.seSeleccionoContainer.emit(container);
  }


}
