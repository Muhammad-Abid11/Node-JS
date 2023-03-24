console.log("Hello Node") //Type in terminal --> "node index.js"


// VIDEO 4
// "REPL" LIKE CMD OR Console of chrome
//  "REPL" environment me jane k liye ap terminal me "node" likhen

// " type nul > index.js " --> to create new file in terminal

// REPL
// 1: js Expression --> sab operation kam krlo
// 2: use variables---> here we use variables
// 3: Multiline code--> use do while loop
// 4: use (_) to get the last result--> for previous result use _ agar apko yad nhi ho old result
// 5: we can use editor mode --> use full Js
// press double to see multiple functions of Node

// video 5  Core Modules// extra library to strong it


const fs = require("fs") //require k ander "" me dyna Core Modules k name 
// create new file
fs.writeFileSync("read.txt", "Hello G by Node")
//                  fileName, Jo Data insert krna hai
//now again type in terminal "node index.js"
// ye file create kryga or hogi to update krdyga 

fs.appendFileSync("read.txt", " Add New Data") // add new data 
//now again type in terminal "node index.js"