import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {
  @Output() seSeleccionoActor: EventEmitter<any> = new EventEmitter<any>();

  public listaActores: Actor[];


  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActores();
  }



}
