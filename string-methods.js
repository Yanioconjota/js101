let mensaje = 'estoy aburrido y no tengo ganas de hacer nada';
let mensaje2 = ' mensaje con espacios '
// length: longitud de la cadena de texto
console.log(mensaje.length);
// indexOf: nos devuelve la posicion de un elemento en la cadena de texto
console.log(mensaje.indexOf('aburrido'));
//slice: toma como parametro desde y hasta donde cortar el string
console.log(mensaje.slice(6,14));
console.log(mensaje.slice(-10)+ ' prueba');
//pruebas
console.log(mensaje.slice(mensaje.indexOf('no')));
//trim: elimina los espacios en blanco en ambos extremos (no en el medio) del string
console.log(mensaje2.trim());
//split: sirve para dividir o cortar una cadena de texto en sub-cadenas y luego retornar un arreglo(array) de estas. Este método también tiene como máximo 2 parámetros, el primer parámetro es el separador y el segundo parámetro es el limite, ambos son opcionales
console.log(mensaje.split(' '));
//replace: nos permite realizar sustituciones dentro de cadenas de texto de grupos de caracteres
console.log(mensaje.replace('aburrido y no tengo ganas de hacer nada', 'con ganas de jugar a la play'));


