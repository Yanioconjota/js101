let texto = '22.3';
//typeof: El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
console.log(typeof texto);
//parseInt: Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
let numero = parseInt(texto);
console.log(typeof numero + ' ' + numero);

//Number: El objeto Number es un objeto envolvente que permite trabajar con valores numéricos. Un objeto Number se crea utilizando el constructor Number() . Un objeto número de tipo primitivo se crea utilizando la función Number().
let otroNumero = Number(texto);
console.log(typeof otroNumero + ' ' + otroNumero);

//String convierte a string el parametro recibido
let textoConvertido = String(numero)
console.log(typeof textoConvertido);
console.log(textoConvertido + 3);

//toString Devuelve una cadena que representa al objeto.
let otroTextoConvertido = otroNumero.toString();
console.log(typeof otroTextoConvertido);
console.log(otroTextoConvertido + 4);

var resultadoConversion = Number('Hola');
console.log(resultadoConversion);


