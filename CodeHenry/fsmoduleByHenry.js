const fs = require('fs');


fs.readFile('file.txt', 'utf-8', (error, data) => {
    console.log("At end due to Async")
    console.log(`Error-->${error}  data-->${data}`)
})


const a = fs.readFileSync('file.txt');
console.log('Sync-->', a.toString())    //Sync k wajah blocking kr rha rha hai wo
console.log("1st Run finished then error xD dueto Async ")



fs.writeFile('filebynode.txt', 'Hello from Node fs.writeFile', () => {
    console.log('Work Done')
})
fs.writeFileSync('filebynode2.txt', 'Hello from Node writeFileSync')


