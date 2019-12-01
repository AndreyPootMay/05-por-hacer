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

const getList = () => {
    loadDb();
    return todoList;
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

const update = (description, completed = true) => {
    loadDb();

    let index = todoList.findIndex( task => task.description === description);

    if (index >= 0) {
        todoList[index].completed = completed;
        createDb();
        return true;
    } else {
        return false;
    }
}

const deleting = (description) => {
    loadDb();

    let newList = todoList.filter(task => {
        return task.description !== description;
    });

    if (todoList.length === newList.length) {
        return false;
    } else {
        todoList = newList;
        createDb();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleting
}