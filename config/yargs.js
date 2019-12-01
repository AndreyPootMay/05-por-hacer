const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('create', 'Crea un elemento por hacer', {
        description,
    })
    .command('update', 'Actualiza una tarea con estado completada', {
        description,
        completed
    })
    .command('delete', 'Elimina una tarea', {
        description,
    })
    .help()
    .argv;

module.exports = {
    argv
}