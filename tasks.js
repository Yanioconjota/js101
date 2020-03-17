const fs = require('fs');
const chalk = require('chalk');

const tareas = {
  archivo: 'tasks.json',
  leer: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
  },
  guardar: function (nuevaTarea) {
    const contenido = this.leer();
    contenido.push({
      "descripcion": nuevaTarea,
      "estado": "Pendiente"
    })
    // console.log(contenido);
    fs.writeFileSync(this.archivo, JSON.stringify(contenido))
    // return 'La nueva tareas es ' + nuevaTarea;
  }
}

module.exports = tareas;