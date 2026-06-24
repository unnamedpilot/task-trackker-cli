const { read, write } = require("./jsonDatabase")

function findAllTasks() {
    return read()
}

function findById(id) {
    const tasks = findAllTasks()
    const task = tasks.find(t => t.id === id)

    if(task === undefined) {
        console.log("ERROR: no object with specified id")
        return {}
    }

    return task
}

function addTask(task) {
    let data = findAllTasks()
    data.push(task)
    write(data)
}

function updateTask(newTask) {
    const data = findAllTasks()
    const updatedData = data.map(task => task.id === newTask.id ? newTask : task)
    write(updatedData)
}

function deleteTask(id) {
    const data = findAllTasks()
    const newData = data.filter(task => task.id !== id)
    console.log(newData)
}



