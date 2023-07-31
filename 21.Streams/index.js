const fs = require("fs");
const http = require("http");
const server = http.createServer()
server.on("request", (req, res) => {

    const restream = fs.createReadStream("input.txt")
    // " input " k data " restream " me agaya hai 
    restream.on("data", (slowData) => {// " data " ki yahi spelling use krna  
        // yahn humne " restream " k " data " k upper event run kiya hai 
        res.write(slowData);
    });

    restream.on("end", () => {
        // " data " run hone k usy render k " end " hojao.
        // q k ye " stream " ye run hota rhyga jb tk isy " end " nhi kiyajaye 
        res.end();
    });
    restream.on("error", (err) => {
        // " data " me koye " error " aye to " res " me error dikha do 
        console.log(err)
        res.end("file Not found");
    });
});

server.listen(8000, "localhost");



// -------------X-----------
    // Both are same difference is line 3 down

/* 

const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
        const rstream = fs.createReadStream("input.txt")
        rstream.on("data", (slowData) => {// " data " ki yahi spelling use krna  
            res.write(slowData);
        });
        rstream.on("end", () => {
            res.end();
        });
        rstream.on("error", (err) => {
            console.log(err)
            res.end("file Not found");
        });
    });


server.listen(8000, "localhost");


 */