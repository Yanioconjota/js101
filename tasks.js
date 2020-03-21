const fs = require('fs');
const chalk = require('chalk');

const tareas = {
  archivo: 'tasks.json',
  leer: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
  },
  escribir: function (tareas) {
    fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
  },
  guardar: function (nuevaTarea) {
    const contenido = this.leer();
    contenido.push({
      "descripcion": nuevaTarea,
      "estado": "Pendiente"
    })
    // console.log(contenido);
    // fs.writeFileSync(this.archivo, JSON.stringify(contenido))
    this.escribir(tareas);
    // return 'La nueva tareas es ' + nuevaTarea;
  }
}

module.exports = tareas;