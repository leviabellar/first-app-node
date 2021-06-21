// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// //sayHello('Mosh');
// console.log(window);

// var message = '';
// console.log(global.message);

//console.log(module);

// const log = require('./logger');
// log("Hello");

//const path = require('path');
const os = require('os');
const fs = require('fs');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

//var pathObj = path.parse(__filename);

//console.log(pathObj);

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});