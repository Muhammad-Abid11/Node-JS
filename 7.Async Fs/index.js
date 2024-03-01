//-- video 7 Async File System
// Callback Must be given,it calls when the work is to be done

const fs = require("fs");
fs.writeFile("NewFile.txt", "Hello by Async", (err) => {
    console.log("Kam hone k baad chalo ")
})
fs.appendFile("NewFile.txt", " New Data added", (err) => {
    console.log("data dal diya ")
})
fs.readFile("NewFile.txt", "utf-8", (err, data) => {
    console.log("Data Read-->", data)
})

// video 9 Challenge