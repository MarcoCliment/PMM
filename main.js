console.log("Hola Mundo!");
/*
a. Lanzar un mensaje de alerta al usuario con el siguiente texto: “Soy el primer
script”.*/
alert('Soy el primer script');
/*
b. El mensaje se almacene en una variable llamada “alertMessage” y siga
funcionando de la misma manera.
*/
var alertMessage = 'Soy el primer script';
alert(alertMessage);
/*
c. El mensaje se almacene en una constante “ALERT_MESSAGE” a la se
concatene el texto “y estoy funcionando sobre “, seguido de la versión del
motor del navegador en uso.
*/
const ALERT_MESSAGE = 'Soy el primer script';
alert(ALERT_MESSAGE + ' y estoy funcionando sobre ' + 
navigator.appVersion);
