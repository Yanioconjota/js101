/*Un closure vive dentro de una función contenedora y será
utilizado únicamente cuando esa función sea ejecutada.
Una vez terminada la ejecución, el closure dejará de existir,
logrando con esto optimizar el rendimiento general al dejar
disponible su espacio en memoria para otras peticiones.*/

let saludar = persona => {
  let mensaje = 'Hola!';
  let nombre = () => { return mensaje + ' ' + persona;}
  return nombre();
}

console.log(saludar('Sole'));

function otroSaludo(persona) {
  let mensaje = 'Aloha!';
  function nombre() {
    return mensaje + ' ' + persona;
  } return nombre();
}
console.log(otroSaludo('Homero'));
