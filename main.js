/*6. Escribe el código de una función que pida al usuario un número entero y dicho número
se pase a otra función que devuelva una cadena de texto con “N es número par” o “N
es número impar”, y se muestre dicha cadena de texto por consola.*/
function pedirNumero(){
    var numero = Number.parseInt(window.prompt("Dame un número entero")); //Intentamos convertir el valor que nos llega a número
    if (!isNaN(numero)){ //He probado varias maneras de comprobar que sea un entero, esta solución comprueba que no sea NaN: NOT A NUMBER. Si le mandamos float, elimina los decimales
        esPar(numero); //llamamos a la función para saber si es par
    }else{
        console.log("No es un número entero.");    
    }    
}

function esPar(n){ //Función que valida si el número pasado es par o impar
    if(n % 2 === 0){ //Si el resto de dividir entre dos un operador da igual a 0, significa que es par
        console.log(n+" es número par");
    }else{
        console.log(n+" es número impar");
    }
}

pedirNumero();
