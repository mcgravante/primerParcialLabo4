import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  @Output() seSeleccionoPais: EventEmitter<any> = new EventEmitter<any>();


  public listaPaises: Pais[] =
    [
      { nombre: "Argentina", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg" },
      { nombre: "Brasil", bandera: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png" },
      { nombre: "Chile", bandera: "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png" },
      { nombre: "Uruguay", bandera: "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png" },
      { nombre: "Paraguay", bandera: "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png" },
      { nombre: "Bolivia", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1536x1050.jpg" },
    ]

  public bandera: string;

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarPais(pais: Pais) {
    this.bandera = pais.bandera;
    this.seSeleccionoPais.emit(pais.nombre);
  }

}


