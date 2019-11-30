const argv = require('yargs').argv;

//console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        console.log('Crear');
        break;
    case 'list':
        console.log('Listar');
        break;
    case 'update':
        console.log('Actualizar');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}