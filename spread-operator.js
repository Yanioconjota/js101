/**
Spread Operator
Este operador permite
expandir cada uno de los
datos de un elemento iterable
dentro de otro elemento.
*/

/*
ARRAYS
Implementando este operador, podemos copiar todos los datos
de un array en un array nuevo.También podemos agregar todos los datos de un array dentro
de un array existente.
*/

let peliculasAccion = [
  'Rambo', 'Avengers', 'Spiderman'
]

let peliculasComedia = [
  'Mi pobre angelito', 'The Hangover'
]

//El spread operatos son los 3 puntos 
let todasLasPelis = [...peliculasAccion, ...peliculasComedia, 'Friday the 13th'];

console.log(todasLasPelis);

/*
OBJETOS
Implementando este operador, podemos copiar todas las
propiedades de un objeto dentro de otro objeto existente.
*/

let generoComedia = {
  nombreGenero : 'Comedia',
  popukaridad : 3
}

let miPobreAngelito = {
  titulo : 'Mi pobre angelito',
  ranking : 1,
  duracion : 120,
  ...generoComedia
}

let theHangover = {
  titulo: 'The Hangover',
  ranking : 3,
  duracion: 120,
  ...generoComedia
}


console.log(miPobreAngelito, theHangover);


/*
FUNCIONES
Implementando este operador, podemos pasarle a una función
un array como argumento.El operador… se encargará de
expandir los datos para que la función los tome como
argumentos separados.
*/

let limpiarEspacios = (...palabras) => {
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].trim();
  }
  return palabras.join(' ');
}

let r1 = limpiarEspacios('Hola', '  que   ', '  tal!');
let r2 = limpiarEspacios('Hola', '  coronavirus!   ');

console.log(r1 + '\n' + r2);

let notas = [9.3,8.5,3.2,7,10];
console.log(Math.min(...notas));


