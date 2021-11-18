import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-modifica-container',
  templateUrl: './modifica-container.component.html',
  styleUrls: ['./modifica-container.component.scss']
})
export class ModificaContainerComponent implements OnChanges {
  @Output() seModificoContainer: EventEmitter<any> = new EventEmitter<any>();
  @Input() containerParaModificar: Container;
  formularioModificacion: FormGroup;



  constructor(private containerService: ContainerService, private toastr: ToastrService, public fb: FormBuilder) {
    this.formularioModificacion = fb.group({
      marca: ["", Validators.required],
      capacidad: ["", Validators.required]
    })
  }

  ngOnChanges(): void {
    if (this.containerParaModificar) {
      let containerSubscription = this.containerService.getContainer(this.containerParaModificar).subscribe((containers: any) => {
        let container: Container = containers[0].payload.doc.data();
        this.formularioModificacion.controls['marca'].setValue(container.marca);
        this.formularioModificacion.controls['capacidad'].setValue(container.capacidad);
        containerSubscription.unsubscribe();
      })
    }
  }

  modificarContainer() {
    let marca = this.formularioModificacion.controls['marca'].value;
    let capacidad = this.formularioModificacion.controls['capacidad'].value;

    let container = new Container(this.containerParaModificar.codigo, marca, capacidad);
    this.containerService.cambiarDatosContainer(container);
    this.showSuccess();
    this.seModificoContainer.emit(container);
  }

  showSuccess() {
    this.toastr.success('Se modificó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }


}
