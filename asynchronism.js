//asincronismo
/*
En programación el asincronismo
consiste en poder iniciar una acción
sin depender de la finalización de
acciones anteriores.
De esta manera nuestro programa
puede seguir avanzando sin esperar
que cada acción termine.
*/

let alarma1 = () => 'Desierta, son las 9:10';
let alarma2 = () => 'Son las 9, te quedan 10 minutos';

// console.log(alarma1());
// console.log(alarma2());

setTimeout(() => {
  console.log(alarma1());
}, 1000);
console.log(alarma2());