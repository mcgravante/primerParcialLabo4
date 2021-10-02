import { Component, OnInit } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  public peliculasListado: Pelicula[];
  public vista: boolean = true;
  // public peliculasListadoEj: Pelicula[] =
  //   [
  //     { id: "1", nombre: "peli1", tipo: Tipo.amor, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 1, fotoDeLaPelicula: "https://us.123rf.com/450wm/tom19275/tom192751812/tom19275181200011/120562863-rollo-de-pel%C3%ADcula-y-aplauso-de-cine-aislado-sobre-fondo-blanco-3d-rendering.jpg?ver=6" },
  //     { id: "2", nombre: "peli2", tipo: Tipo.comedia, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://estaticos.muyinteresante.es/uploads/images/test/5ec3d4fb5bafe82ae3073ae0/adivina-pelicula.jpg" },
  //     { id: "3", nombre: "peli3", tipo: Tipo.terror, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://us.123rf.com/450wm/sashkin7/sashkin71601/sashkin7160100038/52134198-rollo-de-pel%C3%ADcula-con-la-tira-de-pel%C3%ADcula.jpg?ver=6" },
  //     { id: "4", nombre: "peli4", tipo: Tipo.otros, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://us.123rf.com/450wm/sn4ke/sn4ke0903/sn4ke090300114/4585240-vector-de-la-pel%C3%ADcula-foto-pel%C3%ADcula-aislados-ilustraci%C3%B3n-en-blanco.jpg?ver=6" }
  //   ];

  constructor() { }

  ngOnInit(): void {
  }
  Function(pelicula: Pelicula) { }

}
