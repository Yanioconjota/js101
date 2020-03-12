/**
 Nos permite extraer datos de
 arrays y objetos literales de
 una manera más sencilla y
 fácil de implementar.
*/

/**
ARRAYS
Para desestructurar un array, declaramos una variable
(podemos usar var, let o const), y entre corchetes, escribimos el
nombre que queremos.Podemos declarar más de una variable,
separando cada una con una coma, .Luego igualamos esa 
estructura al array del cual queremos extraer los datos.
 */

let colores = ['Rojo', 'Azul', 'Amarillo'];
let [rojo, azul, amarillo] = colores;

console.log(colores);


/*
Si queremos saltar un valor, podemos dejar vacío el nombre de
la variable que correspondería con esa posición.
*/
let array = ['Rojo', 'Azul', 'Amarillo'];
let [color1, , color2] = array;

/*
Si imprimeramos unicamente [color1, , color2] esto nos imprimiría
['Rojo', < 1 empty item > , 'Amarillo'] para que nos traiga unicamente
las posiciones que nos interesan usamos el destructuring con el 
método .filter() y evaluamos que sean distintos a una cadena vacía
*/
console.log([color1, , color2].filter(color => color !== ' '));


/*
OBJETOS
Para desestructurar un objeto literal, creamos una variable
(podemos usar var, let o const), y entre llaves, declaramos
el o los nombres de las propiedades que queremos extraer.
A esa estructura la igualamos al objeto del cual queremos
extraer los datos.
*/

let persona = { nombre: 'Laura', edad: 31, faltas: 3 };
let { nombre, edad } = persona;

console.log({ nombre, edad });


/*
La desestructuración no
modifica el array u objeto
literal de origen.
Su único objetivo es copiar
los valores de una manera
más práctica y rápida.
*/