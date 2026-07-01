/**DISCLAIMER: This layer only exists because I wanted to practice the implementation of
 * Repository or Data Access Object design pattern. Considering we are not aiming for a big system,
 * a system that will scalate or testing a system, it's pretty useless to implement an abstract layer 
 * that separates the concerns of the business logic and the persistence because I won't change the 
 * persistence technology or its functions, although it's pretty fun to try something new.
 */

const { read, write } = require("./jsonDatabase")
const { validateTaskSchema } = require("./validators")


function findAllTasks() {
    return read()
}

function findById(id) {
    const tasks = findAllTasks()
    const task = tasks.find(t => t.id === id)

    if(task === undefined) {
        return {}
    }

    return task
}

function findByStatus(status) {
    const rawData = findAllTasks()
    return rawData.filter(record => record.status === status)
}

function addTask(task) {
    validateTaskSchema(task)
    let data = findAllTasks()
    data.push(task)
    write(data)
}

function updateTask(newTask) {
    validateTaskSchema(task)
    const data = findAllTasks()
    const updatedData = data.map(task => task.id === newTask.id ? newTask : task)
    write(updatedData)
}

function deleteTask(id) {
    const data = findAllTasks()
    const newData = data.filter(task => task.id !== id)
    write(newData)
}

module.exports = { findAllTasks, findById, addTask, updateTask, deleteTask, findByStatus }

