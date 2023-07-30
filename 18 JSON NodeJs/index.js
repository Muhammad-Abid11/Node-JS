const obj = {
    name: "Abid",
    class: 4,
    subject: "English"
}

// console.log("Object Data-->", obj);
const jsonObj = JSON.stringify(obj);
// console.log("JSON Data-->", jsonObj);

const fs = require("fs");
fs.writeFile("JsonFile.json", jsonObj, (err) => {
    console.log("File create krdiya hai ")
})
fs.readFile("JsonFile.json", "UTF-8", (err, data) => {
    console.log("File read krliya JSON format-->", data);
    console.log("File read krliya Object format-->", JSON.parse(data));

})