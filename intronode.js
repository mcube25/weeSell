/*
node is js that runs on ur machine
used as a backend server
node -v
node commands
node (enter)  can now rn node on your terminal
node comes with a global method n properties
e.g process which means what the computer is doing
e.g process.exit
//running script in node js
create a file in your folder name it
script.js
e.g toch script.js
inside the file we can start running code
e.g const a = 5;
const b = 4;
console.log(a+b);

go to the console and run
node script.js
we can also do the setTimeout method
e.g
setTimeout(() => {
    console.log(a+b);
}, 3000) 
//nb 3000 is the second parameter

within node we can also use things that maybe useful to us
based on the global objects we have
e.g console.log(__dirname);
usefl when building a server

//create another file called script2.js
const largeNumber = 355
export largeNumber 
//on the other script import it
e.g import largeNumber from "script2.js"
it doesnt work except with add ons or require form
e.g const largeNumber = require('./script2.js') to import
 to export using common js we do 
 module.exports = { largeNmber:largeNumber}
 //to import to script1.js we do
 const c = require('./script2.js')
const a = c.largeNumber;
const b = 5;
console.log(a+b)

types of modules in node
1.the top example
2.built in modules e.g
const c = require ('fs')
console.log(c);
it allows u to read the file system that is if u have the textfile
3.the http module
e.g const c = require('http')
 
//**npm install nodemon --save-dev
nodemon can be used to listen to changes in our output

*/