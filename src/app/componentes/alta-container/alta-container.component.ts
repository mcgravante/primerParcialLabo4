import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.scss']
})
export class AltaContainerComponent implements OnInit {
  @Output() seGuardoContainer: EventEmitter<any> = new EventEmitter<any>();
  formularioAlta: FormGroup;


  constructor(private containerService: ContainerService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioAlta = fb.group({
      codigo: ["", Validators.required],
      marca: ["", Validators.required],
      capacidad: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardarContainer() {
    let codigo = this.formularioAlta.controls['codigo'].value;
    let marca = this.formularioAlta.controls['marca'].value;
    let capacidad = this.formularioAlta.controls['capacidad'].value;

    let container = new Container(codigo, marca, capacidad);
    this.containerService.guardarContainer(container).then(resp => {
      this.showSuccess();
      this.seGuardoContainer.emit(container);
    }).catch((error) => {
      this.showError(error);
    });
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
