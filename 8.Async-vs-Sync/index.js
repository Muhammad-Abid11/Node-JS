// video 8 Async VS Sync

const fs = require("fs")

//sync 
console.log("-------Sync------")
const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);
console.log("after the data")
console.log("-------------")
console.log("-------Async------")

// Async
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data)
})
console.log("after the data")
