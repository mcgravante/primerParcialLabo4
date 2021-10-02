import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() seSelecciono: EventEmitter<any> = new EventEmitter<any>();
  @Input() arrayPeliculas: Pelicula[];
  @Input() vista: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarPelicula(pelicula: Pelicula) {
    this.seSelecciono.emit(pelicula);
  }

}
