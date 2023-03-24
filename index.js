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



// -------------x---------------

const fs = require("fs") //require k ander "" me dyna Core Modules k name 
// create new file
fs.writeFileSync("read.txt", "Hello G by Node")
//              (fileName, Jo Data insert krna hai)
//now again type in terminal "node index.js"
// ye file create kryga or hogi to update krdyga 

fs.appendFileSync("read.txt", " Add New Dataaaas") // add new data
//now run terminal again type in terminal "node index.js"

// -------------x---------------


const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data); //ye apko burffer data dy jo JS/Browser me nhi hota 
const strData = buf_data.toString();
console.log(strData);
// now run terminal

// -------------x---------------
//rename file Name

fs.renameSync("read.txt", "readWrite.txt")


// yhn upper sy hoty hoa ayen too
// 1st wo file bana rha hai read.txt or usme kuch data hai
// 2nd usme new data insert krdiya or phir
// 3rd us file k name kr k readWrite krdiya
// isy ap reRun bhi krengy tb bhi ye error nhi dyga k read.txt khn hai
// ? Q us time wo phir 1 new file banayega or cycle start hojayega
