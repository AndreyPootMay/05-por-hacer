const argv = require('yargs')
    .command('create', 'Crea un elemento por hacer', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('update', 'Actualiza una tarea con estado completada', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completed: {
            default: true,
            alias: 'c',
            desc: 'Marca como completada la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}