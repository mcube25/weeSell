//www.getpostman.com
const express = require('express')
const bodyParser = require('body-parser')

const app= express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
 res.send('getting root')
 
});

app.get('/profile',(req,res)=>{
    res.status(404).send('getting profile')
    //te most used properties are
    //req.query
    //req.body
    //req.params
    //req.header

    
   });
   app.post('/profile',(req,res)=>{
    const user = {
        name: 'sally',
        hobby: 'soccer'
    }
    res.send(user)
    
   });
   app.listen(3000);
   //install body-parser n use on app
   //npm install body-parser
//reestful apis
//defines a set of functions like get,post,put,delete

//using express to send static files from ur project
const express = require('express')
const bodyParser = require('body-parser')

const app= express();

app.use(express.static(__dirname + '/public'))

app.listen(3000);
//basic server above.

//NODE FILE SYSTEM MODULE
const fs=require('fs');
fs.readFile('./hello.html', (err,data)=>{
    if (err) {
        console.log('erroooor');
    }
    console.log('ASync',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.html');
console.log('sync', file.toString());
//the append method
fs.appendFile('./hello.html', 'this is awesome!!', err =>{
    if (err){
        console.log('bull shit')
    }
})
//write
fs.writeFile('ello.txt','sad to c u go',err =>{
    if (err){
        console.log(err)
    }
})
//delete
fs.unLink('./bye.text', err=>{
    if (err)
{
    console.log(err)
}
console.log('inception')
})



























