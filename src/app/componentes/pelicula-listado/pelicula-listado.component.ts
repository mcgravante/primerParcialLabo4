import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() public arrayPeliculas: Pelicula[]

  constructor() { }

  ngOnInit(): void {
  }

  limpiar() {
    if (this.arrayPeliculas != [])
      this.arrayPeliculas = [];
  }

}
