const fs = require('fs');
const chalk = require('chalk');

const tareas = {
  archivo: 'tasks.json',
  leer: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
  }
}

module.exports = tareas;