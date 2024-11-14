
function verificaNota(nota) {
    if (nota >= 0 && nota <= 20) {
        if (nota >= 11) {
            console.log("Aprobó el examen");
        } else {
            console.log("Desaprobó el examen");
        }
    } else {
        console.log("La nota ingresada no es válida. Debe ser entre 0 y 20");
    }
}


let notaEstu = prompt("Ingrese nota del examen");
notaEstu = Number(notaEstu); 


verificaNota(notaEstu);