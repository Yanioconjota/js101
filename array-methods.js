let notas = [3, 5, 8, 10, 7, 8, 8];
/*
.map()
Este método recibe una función como parámetro(callback).
Recorre el array y devuelve un nuevo array modificado.
Las modificaciones serán aquellas que programemos en
nuestra función de callback.
*/
let notasHasta100 = notas.map(numero => numero * 10);
console.log('Array recorrido con .map() | Devuelve un nuevo array de notas multiplicadas x 10 ' + notasHasta100);

/*
.filter()
Este método también recibe una función como parámetro.
Recorre el array y filtra los elementos según una condición que
exista en el callback.
Devuelve un nuevo array que contiene únicamente los elementos
que hayan cumplido con esa condición.Es decir que nuestro nuevo
array puede contener menos elementos que el original.
*/
let notasAprobadas = notas.filter(numero => numero >= 4);
console.log('Array recorrido con .filter() | Devuelve las notas aprobadas según la condición ' + notasAprobadas);

const arr = [10,15,17,22,44,7,9,102];
const pares = arr.filter(i => {
  const cond = i % 2 === 0;
  console.log('El número ' + i + ' es par? ' + cond);
  return i % 2 === 0; 
});

console.log(pares);

/*
.reduce()
Este método recorre el array y devuelve un único valor.
Recibe un callback que se va a ejecutar sobre cada elemento del
array.El mismo, a su vez, recibe dos parámetros: un
acumulador y el elemento actual que esté recorriendo.
*/

let resultadoFinal = notas.reduce((estado, numero) => estado + numero);
console.log('Array recorrido con .reduce() | Devuelve la sumatoria de cada uno de los números iterados sumados entre si en cada iteración ' + resultadoFinal);

/*
.forEach()
La finalidad de este método es iterar sobre un array.
Recibe un callback como parámetro y, a diferencia de los
métodos anteriores, éste no retorna nada.

La única desventaja que tiene el For Each es que lo recorre desde principio a fin, pero con el
for común se puede poner condiciones para que termine antes.
*/

notas.forEach((valor, indice) => console.log('El valor ' + valor + ' Está en el índice: ' + indice));