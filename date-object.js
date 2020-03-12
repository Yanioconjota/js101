const chalk = require('chalk');
let miCumple = new Date(1984, 01, 02);

console.log('Día --> ' + chalk.greenBright(miCumple.getDate()));
console.log('Mes --> ' + chalk.greenBright(miCumple.getMonth()) + ' --> Enero');
console.log('Día semana --> ' + chalk.greenBright(miCumple.getDay()) + ' --> Miércoles');
console.log('Año --> ' + chalk.greenBright(miCumple.getFullYear()));

let currentDate = new Date();
console.log(currentDate.toUTCString());

let diasComoString = dayIndex => ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][dayIndex];
let mesesComoString = monthIndex => ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][monthIndex];

let dayOfTheWeek = diasComoString(currentDate.getDay()),
    dia = currentDate.getDate(),
    year = currentDate.getFullYear(),
    month = mesesComoString(Number(currentDate.getMonth()));

console.log('Hoy es ' + dayOfTheWeek + ' ' + dia + ' de ' + month + ' del año ' + year);
  


