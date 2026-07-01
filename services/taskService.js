const taskDAO = require("../storage/taskDAO")

function showTasks() {
    const tasks = taskDAO.findAllTasks()
    console.table(tasks)
}
function showFilteredTasks(status) {
    const validStatuses = [
        "in-progress",
        "done",
        "todo"
    ]

    if (!validStatuses.find(validStatus => validStatus === status)){
        console.log(`Error: ${status} is not a valid status`)
        process.exit(0)
    }
    console.table(taskDAO.findByStatus(status))
}


function submitTask(description) {
    function generateId() {
        const tasks = taskDAO.findAllTasks()
        const id = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0
        return id
    }

    const id = generateId()
    const status = "done"
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newTask = { id, description, status, createdAt, updatedAt }



    taskDAO.addTask(newTask)
    console.log("Task successfully submited")
    console.table(newTask)

}

function removeTask(id) {
    if (!(typeof(id) === Number)) {
        throw new Error("Id should be an number")
    }

    const task = taskDAO.findById(id)
    
    if(!task){
        console.log(`ERROR: there is no task with id ${id}`)
    }

    taskDAO.deleteTask(id)
    console.log(`successfully removed task with id ${id}`)
    console.table(task)
}
function markAsDone() {}
function markAsInProgress() {}

submitTask("This is good")