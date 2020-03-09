const tareas = require('./tasks.json');

const accion = process.argv[2];

if(accion === 'listar') {
    console.log('El usuario quiere listar');
} else {
    console.log('El usuario quiere ' + accion);
}

