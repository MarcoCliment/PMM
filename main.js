/*8. Escribe una rutina de código que pida un número del 1 al 12 al usuario y lo valide.
Mientras el número no sea válido, deberá volver a pedirlo, avisando del problema con
un mensaje de alerta con el error descriptivo. Cuando sea válido, se debe llamar a una
función que simule una tirada de un dado de 12. Si el usuario acierta el número que 
sale en el dado, se le debe lanzar un mensaje con una felicitación. De lo contrario,
debe lanzar un mensaje que lo anime a volver a intentarlo.*/
function jugada(){
    while (true){
        //Validación del número introducido
        var numero = Number.parseInt(window.prompt("Dame un número del 1 al 12"));
        if (!isNaN(numero) && numero<13 && numero>0){
            tiradaDado(numero);
            break;//El enunciado no confiere si se puede realizar más de una jugada, actualmente solo permite una
        }else{  
            alert("No es un número entero o del 1 al 12")
        }    
        
    }
}
function tiradaDado(n){
    var tirada= Math.floor(Math.random() * 12) + 1 //Obtenemos un integer entre 1 y 12
    if(n === tirada){
        alert("¡Felicidades, has acertado!")
    }else{
        alert("Ha salido el numero: "+tirada+". Vuelva a intentarlo")       
    }
}

jugada();
