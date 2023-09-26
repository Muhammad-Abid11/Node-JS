// video 22

// video 21 me humne kafi long method dekha tha " stream " k yahn wo direct
// " pipe "k through access ho ja rha hai. 
const fs = require("fs")
const http = require("http");
const server = http.createServer((req, res) => {
    const StreamData = fs.createReadStream("input.txt")//jis file ki stream krne hai uska name
    StreamData.pipe(res); //pipe k through " StreamData " k data " res " me send krdo
})
server.listen(8000, "localhost", () => {
    console.log("server is up on port 8000")
})