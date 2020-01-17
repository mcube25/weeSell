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
// CREATING A SERVER
//create a new file called server.js
//in order for our node to access server.js
//we go to our json file n type in our node command
//node comes with an in built server
//in order to grab this we just make the request.
const http = require( 'http')

const server = http.createServer((request, response)=> {
    //console.log('tanks for d request')
    response.setHeader('Content-type','application/json');
    response.setHeader('Access-Control-Allow-Origin','+');
    response.writeHead(200); //status code
    const dataObj = {id: 123, name: 'boo', email: 'mo@work.org'};
    const data = JSON.stringify(dataObj);
    response.end(data);
});
server.listen(3000, function(params) {
    console.log('eyyyyyy');
});


//expresss.js intro
//create a directory called myapp, change to it and run npm init
//install express as a deppendency using d installation guide
//create a file named app.js and copy the code below
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//rn the app with the command
//node app.js
//then load http://localhost:3000/ in a browser to see the output
