import { Component, OnInit } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public peliculasListado: Pelicula[] = [];

  public vista: boolean = false;
  public pelicula: Pelicula;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas:any)=>{
      for (let index = 0; index < peliculas.length; index++) {
        const element = peliculas[index];
        
      }
    })
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
