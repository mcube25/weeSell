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

//express middleware

//an express middlewre is a routing middleware web framework that has minimal functionAlity of its own. an express installation is a series of middleware function calls
//middleware functions that have access to the request object(req), the response(res), and te next middleware function in te application request-response cycle.
//The next middleware function is commonly denoted by a variable named next
//middleware functions can erform any of the following task
//Execute code
//Make changes to the request and response objects
//End reqest response cycle
//call the next middleware function in te stack
//an express application can use the following types of middleware
//aplication-level middleware
//router-level middleware
//error handling middleware
//built-in middleware
//third-party middleware

//application-level middleware
/*
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request
*/
var app = express()
app.use(function(req,res,next){
    console.log('time:',Date.now())
    next()
})
//app.use( (req,res,next)=> { console.log(), next()})


//This example shows a route and its handler function (middleware system). The function handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
    res.send('USER')
  })
  //series of middleware functions at a mount point
  app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })
  //route handlers enable u to define multiple routes for a path
//the second route will never get called
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
  })
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id)
  })
  //ROUTER LEVEL MIDDLEWARE
  const app = express()
  const router =express.Router()
  // a middleware fnction with no mount path. tis code is executed wit every request to te router
  router.use((req,res,next)=>{
      console.log('Time:', Date.now())
  })

  //a middleware sub-stack shows request info for any type of http request to te /user/:id path
  router.use('/user/:id',(req,res,next)=>{
      console.log('Request URL', req.originalUrl)
      next()
  },(req,res,next)=>{
      console.log('Request Type:',req.method)
      next()
  })
  //a middleware sub statck tat andles GET request to the /user/:id path
  router.get('/user/:id',(req,res,next)=>{
      //if id is 0 ski to te next parameter
      if (req.params.id === 0) next ('route')
      //otherwise pass control to te next middleware function in tis stack
      else next()
  }, (req,res,next)=>{
      //render a regular page
      res.render('regular')
  })
  
  //handler for the /user/:id path wich renders a special page
  router.get('/user/:id',(req,res,next)=>{
      console.log(req.params.id)
      res.render('special')
  })

//mount the router on thhe app
app.use ('/',router);

//tis example shows a middleware sub-stack tat handles GET request
//to d /user/:id path
const app = exppress();
const router = express.Router()
//predicate the router with a check and bail out wen needed
router.use((req,res,next)=>{
    if (!req.headers['x-auth'])
    return next('router')
    next()
})

router.get('/',(req,res){
    res.send('hello, user!')
})
//use router 404 for anyting falling through
app.use('/admin', router, (req,res)=>{
    res.sendStatus(401)
})

//Error handling middleware
//it requires four arguments instaead of 3
//(err,req,res,next)
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('someting broke')
})

//built-in middleware
/*
express.static serves static assets such as HTML files, images, and so on.
express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
*/

//Third-party middleware

//use third party middleware to add functionality to express apps
//install te node.js module for d required functionality, ten load it to ur app
//at d application level or router level
//$ npm install cookie-parser
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
//load the cookie-parsing middleware
app.use(cookieParser())


//complete web developer
//express middleware
const express = require('express')
const app= express();
app.use((req,res,next)=>{
    console.log('<h1>helloooo</h1>')
    next()
})
//te above is te basic concept of middleware
app.get('/',(req,res)=>{
    err.send('testtest')
});
app.listen(3000);
















