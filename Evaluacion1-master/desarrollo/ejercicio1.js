
const aleatorio = [4, 6, 7, 99, 12, 19];


function sumaArray(ejer1) {
    let suma = 0;
    for (let i = 0; i < ejer1.length; i++) {
        suma += ejer1[i];
    }
    return suma;
}


const resultado = sumaArray(aleatorio);
console.log("La suma es:", resultado);
