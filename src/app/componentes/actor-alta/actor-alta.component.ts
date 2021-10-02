import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  public nombre;
  public apellido;
  public email;
  public direccion;
  public pais;

  constructor(private actorService:ActorService) { }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  guardarActor(){
    let actor = new Actor(this.nombre, this.apellido, this.email, this.direccion, this.pais);
    this.actorService.guardarActor(actor);
  }

}
