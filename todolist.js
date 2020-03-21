const tareas = require('./tasks'),
      chalk = require('chalk'),
      accion = process.argv[2],
      nuevaTarea = process.argv[3],
      nuevoEstado = process.argv[4];

switch (accion) {
  case 'listar':
    const tareasArray = tareas.leer();
    tareasArray.forEach((tarea, i) => {
      console.log((i + 1) + ' - ' + 'Descripción: ' + chalk.cyan(tarea.descripcion) + ' Estado ' + chalk.green(tarea.estado));
    });
    break;
  case 'agregar':
    const resultadoGuardar = tareas.guardar(nuevaTarea);
    if (nuevaTarea) {
      console.log('La tarea ' + nuevaTarea + ' fue agregada exitpsamente');
    } else {
      console.log('Debes agregar una tarea con estado!');
    }
    break;
  case 'filtrar':
    console.log('se ha filtrado');
    break;
  case undefined:
    console.log('Chino no me come esto cosa');
    break;
  default:
    console.log('El usuario quiere ' + accion);
    break;
}