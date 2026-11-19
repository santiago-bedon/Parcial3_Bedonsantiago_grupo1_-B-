//Santiago Bedon Diaz Grupo 1 Simulador de compra en cuotas con tarjeta de crédito

let valorCompra = prompt("ingresa el valor de tu compra");
let cuotas = prompt("Cantidad de cuotas deseadas");
let cupo = prompt("Cupo disponible");

if (valorCompra > 0 && cuotas >= 1 && cuotas <= 36 && cupo >= valorCompra) {
 let tasa = (valorCompra / cuotas)
} else {
    alert("hay un problema verificar los datos");
}

