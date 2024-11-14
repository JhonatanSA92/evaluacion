function encontrar(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}


let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");


numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);


if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    const mayor = encontrar(numero1, numero2, numero3);
    console.log("El mayor de los tres es", mayor);
} else {
    console.log("ingrese valores numéricos");
}