export class Pelicula {

    id: string;
    nombre: string;
    tipo: Tipo;
    fechaDeEstreno: Date;
    cantidadDePublico: number;
    fotoDeLaPelicula: string;

    constructor(id: string, nombre: string, tipo: Tipo, fechaDeEstreno: Date, cantidadDePublico: number, fotoDeLaPelicula: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
    }
}

    enum Tipo {
    terror,
    comedia,
    amor,
    otros
}


