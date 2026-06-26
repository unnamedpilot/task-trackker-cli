const taskSchema = {
        id: "number",
        description: "string",
        status: "string",
        createdAt: "string",
        updatedAt: "string"
    }

function validateTask(task) {

    if(typeof(task) !== "object") {
        throw new Error(`task requires to be an object, but is a ${typeof(task)}`)
    }

    if(Object.keys(task).length === 0) {
        throw new Error("The task object is empty")
    }
    
    
    for (const [ field, type ] of Object.entries(taskSchema)) {
        if (!Object.hasOwn(task, field)) {
            throw new Error(`task doesn't contain required field ${field}`)
        }
        else if (typeof(task[field]) !== type) {
            throw new Error(`task field ${field} should be ${type} but instead is ${typeof(task[field])}`)
        }
    }
    
    return true
}

module.exports = { validateTask }