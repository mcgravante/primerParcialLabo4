import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() seSelecciono: EventEmitter<any> = new EventEmitter<any>();
  @Input() arrayRecibido: any;

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarItem(item: any) {
    this.seSelecciono.emit(item);
  }

}
