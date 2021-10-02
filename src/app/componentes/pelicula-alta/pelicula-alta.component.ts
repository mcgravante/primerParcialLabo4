import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  id: string;
  nombre: string;
  tipo: Tipo;
  fechaDeEstreno: string;
  cantidadDePublico: number;
  fotoDeLaPelicula: string;
  actor: Actor;
  
  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

  cambiarActor(actor:Actor){
    this.actor=actor;
  }

  guardarPelicula(){
    let pelicula = new Pelicula(this.id, this.nombre, this.tipo, this.fechaDeEstreno, this.cantidadDePublico, this.fotoDeLaPelicula, this.actor);
    this.peliculaService.guardarPelicula(pelicula);
  }

}
