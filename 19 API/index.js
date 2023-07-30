// from video 16 & 17 add some thing to get API DATA that save in JSON file
const fs = require("fs")
const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url) video 17

    if (req.url == "/") {
        // res.end("Hello API") 
        //pehly yhn check kiya k ye Route open ho rha hai ya nhi then nichy
        // fileRead kr k usy console pe check kiya
        //then usy page pe render 
        fs.readFile(`${__dirname}/userapi.json`, "UTF-8", (err, data) => {
            // yhn upper humne dynamic path diya hum direct userapi.json bhi dy sakty thy
            res.writeHead(200, { "Content-type": "application/json" })// 200 for success optional but good practice
            res.end(data)
            console.log(data)
        })
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" }) //ye line upper hi rhy nichy hoga too error nhi btayega
        res.end("<h1>404 page not found </h1>")
        // laken ye status code 200, its means page load success
        // jb k ye error hai to network me isy error dyna chahiye is liye
    }
})

/* 
server.listen(8000, "localhost", () => {
    console.log("Server is up at port 8000")
}) 
*/

//   OR 

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is up at port 8000")
})