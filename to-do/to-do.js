const fs = require('fs');

let todoList = [];

const createDb = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar el archivo', err);
    })
}

const loadDb = () => {
    try {
        todoList = require('../db/data.json');
    } catch (err) {
        todoList = [];
    }
}

const create = (description) => {
    loadDb();
    
    let todo = {
        description,
        completed: false,
    };

    todoList.push(todo);
    createDb()

  return todo;
}

module.exports = {
    create
}