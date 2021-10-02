import { Component, OnInit } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public peliculasListado: Pelicula[];
  public peliculasListadoEj: Pelicula[] =
    [
      { id: "1", nombre: "peli1", tipo: Tipo.amor, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 1, fotoDeLaPelicula: "https://us.123rf.com/450wm/tom19275/tom192751812/tom19275181200011/120562863-rollo-de-pel%C3%ADcula-y-aplauso-de-cine-aislado-sobre-fondo-blanco-3d-rendering.jpg?ver=6", actor:null },
      { id: "2", nombre: "peli2", tipo: Tipo.comedia, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://estaticos.muyinteresante.es/uploads/images/test/5ec3d4fb5bafe82ae3073ae0/adivina-pelicula.jpg", actor:null },
      { id: "3", nombre: "peli3", tipo: Tipo.terror, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://us.123rf.com/450wm/sashkin7/sashkin71601/sashkin7160100038/52134198-rollo-de-pel%C3%ADcula-con-la-tira-de-pel%C3%ADcula.jpg?ver=6", actor:null },
      { id: "4", nombre: "peli4", tipo: Tipo.otros, fechaDeEstreno: new Date().toLocaleString(), cantidadDePublico: 2, fotoDeLaPelicula: "https://us.123rf.com/450wm/sn4ke/sn4ke0903/sn4ke090300114/4585240-vector-de-la-pel%C3%ADcula-foto-pel%C3%ADcula-aislados-ilustraci%C3%B3n-en-blanco.jpg?ver=6", actor:null }
    ];
  public vista: boolean = false;
  public pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  CambiarVista() {
    if (this.vista == true) {
      this.vista = false;
    }
    else {
      this.vista = true;
    }
  }

  mostrar(pelicula: Pelicula) {
    this.pelicula = pelicula;
  }

  limpiar(){
    this.pelicula=null;
  }
}
