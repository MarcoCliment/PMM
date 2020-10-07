/*7. Escribe una función que acepte como parámetro un número y devuelva el valor
absoluto del mismo.*/

function pideNumero(n){
    if(n < 0){
        n = n*-1 //Esta lógica multiplica el número negativo por -1; menos por menos es más
    }
    return n;
}

var num; //Ponemos varios números de ejemplo
num = pideNumero(15)
console.log(num)
num = pideNumero(-20)
console.log(num)
num = pideNumero(-80.5)
console.log(num)
num = pideNumero(50)
console.log(num)
