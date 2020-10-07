//4. Dado el siguiente snippet de código:
var numero1 = 5;
var numero2 = 8;
/*if(...) {
    console.log("numero1 no es mayor que numero2");
}
if(...) {
    console.log("numero2 es positivo");
}
if(...) {
    console.log("numero1 es negativo o distinto de cero");
}
if(...) {
    console.log("Incrementar en 1 unidad el valor de numero 1 "+
    "no lo hace mayor o igual que numero2");
}*/

//Haz que las afirmaciones en las cadenas de texto no digan ninguna mentira.
if(!(numero1>=numero2)) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2>=0) {
    console.log("numero2 es positivo");
}
if(numero1<0 || numero1!=0 ) {
    console.log("numero1 es negativo o distinto de cero");
}
if(!(numero1+1>=numero2)) {
    console.log("Incrementar en 1 unidad el valor de numero 1 "+
    "no lo hace mayor o igual que numero2");
}