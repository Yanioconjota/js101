//callbacks: Un callback es una función que se pasa como parámetro de otra función. La función que lo recibe es quien se encarga de ejecutarla cuando sea necesario.

let sumar = (num1, num2) => num1 + num2;

let restar = (num1, num2) => num1 - num2;

let multiplicar = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    resultado = 'Todo número multiplicado por 0 da 0';
  }
  resultado = 'El resultado de la multiplicación es: ' + (num1 * num2);
  return resultado;
}

let dividir = (num1, num2) => {
  let resultado = 0;
  if (num1 === 0) {
    resultado = 'El resultado es 0';
  }
  if (num2 === 0) {
    resultado = 'Error en la división';
  } else {
    resultado = 'El resultado de la división es: ' + (num1 / num2);
  }
  return resultado;
}

//En este ejemplo de callback le pasamos 3 argumentos, siendo el último una función, la cual no debe llevar paréntesis, porque se ejecutará dentro de la función padre, es decir, la que la recibe como parámetro.
let calculadora = (num1, num2, operacion) => operacion(num1, num2);
console.log(calculadora(19,2,dividir));

