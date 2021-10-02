import { Actor } from "./actor";

export class Pelicula {

    id: string;
    nombre: string;
    tipo: Tipo;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    fotoDeLaPelicula: string;
    actor: Actor;

    constructor(id: string, nombre: string, tipo: Tipo, fechaDeEstreno: string, cantidadDePublico: number, fotoDeLaPelicula: string, actor: Actor) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
        this.actor = actor;
    }
}

export enum Tipo {
    terror,
    comedia,
    amor,
    otros
}


