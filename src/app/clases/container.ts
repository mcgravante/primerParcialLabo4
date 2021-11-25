import { Producto } from "./producto";

export class Container {
    public codigo: number;
    public marca: string;
    public capacidad: number;
    public productosCargados: Producto[];


    constructor(codigo: number, marca: string, capacidad: number, productosCargados: Producto[]) {
        this.codigo = codigo;
        this.marca = marca;
        this.capacidad = capacidad;
        this.productosCargados = productosCargados;


    }

}
