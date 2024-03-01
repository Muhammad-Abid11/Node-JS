// video 4 REPL
//node <-- just type in terminal to open "REPL" environment

// video 5 Core Modules

// video 6 CRUD operation FileSystem Sync

const fs = require("fs");

//create folder
//fs.mkdirSync("folderBySync") //folder 1 time banaga next time already exist k error ayega

//create file
fs.writeFileSync("./folderBySync/NewFile.txt", "Hello by Async")

//update
fs.appendFileSync("./folderBySync/NewFile.txt", " -----New Data added by Sync")

//read
const reader = fs.readFileSync("./folderBySync/NewFile.txt", "utf-8")
// console.log(reader)

//delete
// fs.unlinkSync("./folderBySync/NewFile.txt") //jb file ho tb run kren

//delete folder
// fs.rmdirSync("folderBySync") //jb folder empty ho tb run kren
