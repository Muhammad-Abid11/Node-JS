// video 13
// npm start krne k liye apne project me
// type "npm init"
//  "npm i chalk" // dependance install in this project

// -------------xx---------------------

import chalk from 'chalk';  //ES Version
console.log(chalk.bgYellow('Hello world!'));
/*

The error message you encountered indicates that you are trying to use ES modules (import/export syntax)
 in a CommonJS module environment, which is the default for Node.js.
Since the 'chalk' library uses ES modules, you need to either use the .mjs extension or
configure your package.json to indicate that your module uses the ES module format.
Here's how you can resolve the issue:
Use the.mjs extension:
// Rename your index.js file to index.mjs, and then run the code with the following command
node index.js
*/


// -------------xx---------------------

/* 

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
ye is trha import pe error dy rha hai 

*/