import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnChanges {
  @Input() paisNombre: string;
  pais: Pais;

  constructor(public paisService: PaisService) { }

  ngOnChanges(): void {
    this.paisService.getPaisByName(this.paisNombre).subscribe((paises: any) => {
      let name = paises[0].name.common;
      let bandera = paises[0].flags.png;
      this.pais = new Pais(name, bandera);
    })
  }




}
