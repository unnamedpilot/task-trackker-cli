const { readFileSync, writeFileSync, appendFileSync, lstat } = require("fs")
const path = require("path")

const fileLocation = path.join(__dirname, "../data.json")

function read() {
    return JSON.parse(readFileSync(fileLocation, "utf-8"))
}

function write(data) {
    const parsedData = JSON.stringify(data)
    writeFileSync(fileLocation, parsedData, "utf-8")
    console.log("Successful operation")
}

module.exports = { read, write }


