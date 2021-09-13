let title = 'breaking bad rules!'

//console.log(title.slice(-10));

let nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
let saludar = (nombre, apellido, callback) => `Hola ${callback(nombre, apellido)}`;
console.log(saludar('Homero', 'Thompson', nombreCompleto));