// video 16 & 17

const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url) video 17
    if (req.url == "/") {
        res.end("<h1>Hello From Servers OR 1-Page sy root page pe jaogy too server crash</h1>");
    }
    if (req.url == "/about") {
        res.end("<h1>Hello About now check contact   OR 1-Page sy root page pe jaogy too server crash</h1>")
        // res.end("") do response nhi send hoga abhi tk
    }
    if (req.url == "/contact") {
        res.end("<h1>Hello contact now check  About OR 1-Page sy root page pe jaogy too server crash</h1>")
    } else {
        res.writeHead(404) //ye line upper hi rhy nichy hoga too error nhi btayega
        res.end("<h1>404 page not found  OR 1-Page sy root page pe jaogy too server crash</h1>")
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