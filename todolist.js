const tareas = require('./tasks');
const chalk = require('chalk');
const accion = process.argv[2];

switch (accion) {
  case 'listar':
    const tareasArray = tareas.leer();
    tareasArray.forEach((tarea, i) => {
      console.log((i + 1) + ' - ' + 'Descripción: ' + chalk.cyan(tarea.descripcion) + ' Estado ' + chalk.green(tarea.estado));
    });
    // for (let i = 0; i < tareasArray.length; i++) {
    //     console.log((i+1) + ' - ' + 'Descripción: ' + chalk.cyan(tareasArray[i].descripcion) + ' Estado ' + chalk.green(tareasArray[i].estado));
    // }
    break;
  case 'modificar':
    const estadoArr = tareas.leer();
    if (process.argv[3] !== undefined) {
      for (let i = 0; i < estadoArr.length; i++) {
        let estado = chalk.green(estadoArr[process.argv[3]].estado);
        let nuevoEstado = chalk.green(process.argv[4]);
        console.log((i + 1) + ' - ' + 'Descripción: ' + chalk.cyan(estadoArr[i].descripcion) + ' Estado ' + estado.replace(estadoArr[process.argv[3]].estado, nuevoEstado));
      }
    } else {
      console.log('No hay nada para modificar');

    }

    break;
  case undefined:
    console.log('Chino no me come esto cosa');
    break;
  default:
    console.log('El usuario quiere ' + accion);
    break;
}