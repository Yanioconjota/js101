//arrow functions: Las arrow functions reciben su nombre por el operador => Se puede omitir la palabra function, las llaves si se realiza una sola operación y el return en caso de que lo que devuelva está en una sola línea. El paréntesis también puede obviarse mientras que se le pase un solo parámetro.

//arrow function con un solo parametro
let laMitad = numero => numero / 2;
console.log(laMitad(8));

//arrow function con 2 o mas parametros
let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4));

//arrow function con llaves
let tengoQueTrabajar = dia => {
  if (dia === 'Sábado' || dia === 'Domingo') {
     return 'No tienes que trabajar';
  } else {
    return 'Si, tienes que ir a trabajar!';
  }
}

console.log(tengoQueTrabajar('Sábado'));

//arrow function sin parametros
let saludo = () => 'Hola mundo!';
console.log(saludo());

let horaActual = () => {
  let fecha = new Date();
  return 'Hoy es: ' + fecha.getDate() + '/' + (fecha.getMonth()+1) + ' Y la hora actual es: ' + fecha.getHours() + ':' + fecha.getMinutes();
}

console.log(horaActual());
