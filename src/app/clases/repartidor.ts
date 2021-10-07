import { Pais } from "./pais";

export class Repartidor {
    public dni: number;
    public nombre: string;
    public edad: number;
    public capacidadDeTransporte: number;
    public pais: string;
    public unidadPropia: boolean;

    constructor(dni: number, nombre: string, edad: number, capacidadDeTransporte: number, pais: string, unidadPropia: boolean) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.capacidadDeTransporte = capacidadDeTransporte;
        this.pais = pais;
        this.unidadPropia = unidadPropia;
    }
}
