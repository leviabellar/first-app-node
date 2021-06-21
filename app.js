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

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);