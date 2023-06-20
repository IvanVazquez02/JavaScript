

const prendas = [
    {id: 1, imagen: '👕', descripcion: 'Remeras Oversize', precio: 9199},
    {id: 2, imagen: '👖' , descripcion: 'Jeans', precio: 12599}]

const guardarEnLocalStorage = () => {
    if (carrito.length>0) { 
        localStorage.setItem ('carrito', JSON.stringify(carrito))
    }
}

const recuperarCarritoDeLocalStorage = () => {
    return JSON.parse(localStorage.getItem('carrito')) || []
}

const carrito = recuperarCarritoDeLocalStorage ()

function buscarPrendas (codigo) {
    let resultado = prendas.find((prenda)=> prenda.codigo === parseInt(codigo) )
    return resultado // no encuentra coincidencia, returna 'undefined' 
}

function finalizarCompra() {
    const shopping = new Compra(carrito)
    alert ('El costo total de tu compra es $ ' + shopping.obtenerSubtotal() + '. Muchas gracias por confiar en nosotros.')
    console.log(shopping.obtenerSubtotal())
}

function comprar() {
    let codigo = prompt("Ingresa el código de tu prenda de interés. (1 o 2)")
    let prendaElegida = buscarPrendas(codigo)
    if (prendaElegida !== undefined) {
        carrito.push(prendaElegida)
        alert('✅ ' + prendaElegida.tipo + ' se agregó al carrito.')
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta === true) {
            comprar() //Recursividad
        } else {
            finalizarCompra()
        }
    } else {
        alert('Error en el código ingresado. Refresca, para intentarlo de nuevo.')
    }
}
comprar()



