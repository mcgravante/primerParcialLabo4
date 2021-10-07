import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  formularioAlta: FormGroup;

  constructor(private actorService: ActorService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioAlta = fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", Validators.required],
      direccion: ["", Validators.required],
      pais: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre: string) {
    this.formularioAlta.controls['pais'].setValue(paisNombre);
  }

  guardarActor() {
    let nombre = this.formularioAlta.controls['nombre'].value;
    let apellido = this.formularioAlta.controls['apellido'].value;
    let email = this.formularioAlta.controls['email'].value;
    let direccion = this.formularioAlta.controls['direccion'].value;
    let pais = this.formularioAlta.controls['pais'].value;
    let actor = new Actor(nombre, apellido, email, direccion, pais);
    this.actorService.guardarActor(actor).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });;
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
