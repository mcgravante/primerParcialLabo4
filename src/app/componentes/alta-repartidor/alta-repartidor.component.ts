import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {
  formularioAlta: FormGroup;

  constructor(private repartidorService: RepartidorService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioAlta = fb.group({
      dni: ["", Validators.required],
      nombre: ["", Validators.required],
      edad: ["", Validators.required],
      capacidadDeTransporte: ["", Validators.required],
      pais: ["", Validators.required],
      unidadPropia: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cambiarPais(paisNombre: string) {
    this.formularioAlta.controls['pais'].setValue(paisNombre);
  }

  guardarRepartidor() {
    let nombre = this.formularioAlta.controls['nombre'].value;
    let dni = this.formularioAlta.controls['dni'].value;
    let edad = this.formularioAlta.controls['edad'].value;
    let capacidadDeTransporte = this.formularioAlta.controls['capacidadDeTransporte'].value;
    let pais = this.formularioAlta.controls['pais'].value;
    let unidadPropia = this.formularioAlta.controls['unidadPropia'].value;
    let repartidor = new Repartidor(dni, nombre, edad, capacidadDeTransporte, pais, unidadPropia);
    this.repartidorService.guardarRepartidor(repartidor).then(resp => {
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
