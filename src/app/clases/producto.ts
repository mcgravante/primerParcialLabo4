export class Producto {
    public codigo: number;
    public descripcion: string;
    public precio: number;
    public stock: number;
    public pais: string;
    public comestible: boolean;

    constructor(codigo: number, descripcion: string, precio: number, stock: number, pais: string, comestible: boolean) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.pais = pais;
        this.comestible = comestible;
    }
}
