import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  public peliculasListado: Pelicula[];

  constructor() { }

  ngOnInit(): void {
  }
  Function(pelicula: Pelicula) { }

}
