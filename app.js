const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');
//console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = todo.getList();

        for (let task of list) {
            console.log('==========='.green);
            console.log(task.description);
            console.log(`Estado: ${task.completed}`);
            console.log('===========\n'.green);
        }
        break;
    case 'update':
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        let deleted = todo.deleting(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
