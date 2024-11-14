function convertir(celsius) {
    return (celsius * 9/5) + 32;
}


let temCelsius = prompt("Ingrese la temperatura en grados Celsius");
temCelsius = Number(temCelsius); 


if (!isNaN(temCelsius)) { 
    const Fahren = convertir(temCelsius);
    console.log("La temperatura en Fahrenheit es:", Fahren);
} else {
    console.log("ingrese un valor numérico");
}