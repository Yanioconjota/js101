const chalk = require('chalk');
/**
OBJETOS
El bucle
for… in nos permite iterar sobre cada una de las
propiedades de un objeto.
 */

 let persona = {
   nombre : 'Alan',
   apellido : 'Ríos',
   edad : 28
 }

 for (const llave in persona) {
   console.log('En el atributo llave ' + chalk.green(llave) + ' se encuentra el valor ' + chalk.yellow(persona[llave]));
   //Con corchetes accedemos al valor del elemento del array
 }

/**
ARRAYS y STRINGS
El bucle
for… of nos permite iterar sobre cada uno de los valores
de un elemento iterable, por ejemplo, un array.
 */

 let notas = [3, 5, 8, 10, 7, 8, 8];

 for (let i = 0; i < notas.length; i++) {
   console.log('Este es el item ' + chalk.green(notas[i]) + ' en el array notas en un ' + chalk.green('for'));
 }

 for (const elemento of notas) {
   console.log('Este es el item ' + chalk.cyan(elemento) + ' en el array notas en un ' + chalk.cyan('for-of'));
 }