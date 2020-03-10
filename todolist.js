const tareas = require('./tasks');
const chalk = require('chalk');
const accion = process.argv[2];

switch(accion) {
    case 'listar' : 
        const tareasArray = tareas.leer();
        for (let i = 0; i < tareasArray.length; i++) {
            console.log((i+1) + ' - ' + 'Descripción: ' + chalk.cyan(tareasArray[i].descripcion) + ' Estado ' + chalk.green(tareasArray[i].estado));
        }
    break;
    case 'modificar' :
        console.log();
    break;
    case undefined :
        console.log('Chino no me come esto cosa');
        break;
    default :
        console.log('El usuario quiere ' + accion);
    break;
}

