//SIMULAR BIENVENIDA A MI WEB

function simularBienvenida() {
    let nombreyapellido= prompt("Hola! Bienvenido a nuestra web. Ingresa tu nombre y apellido para continuar.(debe ser mayor a 5 caracteres para ser correcto)")
    if (nombreyapellido.length <= 5) {
        alert("Inténtalo de nuevo. Debes ingresar tu nombre y apellido.");
        return
    } else {
        alert(`¡Hola, ${nombreyapellido}!`);
    }
    
    let prenda = prompt("Gracias. Por favor ingresa el nombre de la prenda que quieras comprar para consultar si hay stock (remera o jean)")
    if (prenda !== "remera" && prenda !== "jean") {
        do prenda = prompt("Inténtalo de nuevo. Debes elegir entre 'remera' o 'jean'.");
        while (prenda !== "remera" && prenda !== "jean");
    }
    alert(`Has elegido una ${prenda}.`);

    var valorPrenda = 15000;

    for (var cuotas = 1; cuotas <= 3; cuotas++) {
    var valorCuota = valorPrenda / cuotas;
    console.log("Valor en " + cuotas + " cuota(s): $" + valorCuota.toFixed(2));
}

}

    simularBienvenida();
