/*3. Dado el siguiente conjunto de elementos:*/
const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
/*a. Escribe las instrucciones para mostrar por consola el tipo de cada uno de los
elementos del conjunto. No es necesario mostrar su índice.*/ 
for(let elemento of values){
    if(typeof elemento === "object" && Array.isArray(elemento)){ //Typeof no diferencia los array, he puesto esta función añadida para diferenciarla del otro objeto
        console.log("array");      
    }else{
        console.log(typeof elemento); //devuelve el tipo de objeto en el índice del array que está recorriendo en este momento
    }
};