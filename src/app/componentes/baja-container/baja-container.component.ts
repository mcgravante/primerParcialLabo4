import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-baja-container',
  templateUrl: './baja-container.component.html',
  styleUrls: ['./baja-container.component.scss']
})
export class BajaContainerComponent implements OnInit {
  @Output() seBorroContainer: EventEmitter<any> = new EventEmitter<any>();
  @Input() containerParaBorrar: Container;

  constructor(private containerService: ContainerService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  borrarContainer() {
    this.containerService.borrarContainer(this.containerParaBorrar);
    this.showSuccess();
    this.seBorroContainer.emit(this.containerParaBorrar);
    this.containerParaBorrar = null;

  }

  showSuccess() {
    this.toastr.success('Se eliminó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }


}
