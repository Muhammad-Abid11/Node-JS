// video 12
const add = require("./oper")
const multiOperator = require("./multiOpera");
const { name } = require("./multiOpera");
// multiOperator ko hum destructor kr k us ki property direct access kr sakty hen because its a object

console.log(`result of add is ${add(4, 2)}`);
console.log(`result of multiplication is ${multiOperator.multiple(4, 2)}`);
console.log(`result of subtraction is ${multiOperator.sub(4, 2)}`);
console.log(`Name hai "${name}"`)