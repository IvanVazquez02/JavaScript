class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) { //función de orden superior REDUCE()
            return this.carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
        }
    }
}