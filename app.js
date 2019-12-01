const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
//console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
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