/*
Parámetro REST
Utilizado como último
parámetro de una función nos
permite capturar cada uno de
los argumentos adicionales
pasados a esa función.
*/

/*
El parámetro rest se escribe de la misma manera que el
operador spread….La diferencia es que se utiliza durante
la definición de la función y no durante su ejecución.
El parámetro rest generará un array con todos los argumentos
adicionales que se le pasen a la función.
*/

let miFuncion = (param1, param2, ...otros) => otros;
console.log(miFuncion('Estoy', 'aquí', 'borracho y loco'));

/*
Implementando el parámetro rest, podemos definir una función
que acepte cualquier número de argumentos.
*/

let sumar = (...numeros) => {
  // Sabiendo que numeros es ahora un array utilizamos
  // el método reduce para obtener la sumatoria
  return numeros.reduce((acum, num) => acum += num);
}

console.log(sumar(1,4));
console.log(sumar(13,6,8,12,23,37));

/*Como el parámetro rest captura todos los
argumentos restantes, siempre debe ser el último
parámetro de la función, de lo contrario, recibiremos
un error.*/

/*
function sumar(...numeros, otroParámetro) {
  // Utilizamos el método reduce para obtener la suma
  return numeros.reduce((acum, num) => acum += num);
}

SyntaxError: parameter after rest parameter
*/