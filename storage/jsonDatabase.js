const { readFileSync, writeFileSync, appendFileSync, lstat } = require("fs")

const path = "data.json"

function read() {
    return JSON.parse(readFileSync(path, "utf-8"))
}

function write(data) {
    const parsedData = JSON.stringify(data)
    writeFileSync(path, parsedData, "utf-8")
    console.log("Successful operation")
}


