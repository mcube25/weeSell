const fs = require('fs');
//run a script file
//1.wat floor does santa end up on
//(--> should go up one floor
////(--> should go down one floor

function question1(){
    fs.readFile('./santa.txt', (err,data)=>{
        const directions = data.toString();
        const directionsArray = directions.split('');
        //maping out
        const answer = directionsArray.reduce((acc, currentItem)=>{
            if (currentItem === '('){
                return acc += 1
            }else if (currentItem === ')'){
                return acc -= 1
            }
        }, 0)

    })
}
//run the function
question1();
//2.wen does santa first enter the basement
function question2(){
    fs.readFile('./santa.txt',(err, data)=>{
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem)=>{
          if (currentItem === '('){
             acc +=1  
          }  else if (currentItem === ')'){
               acc -= 1
          }
          counter ++
          return acc < 0 
        })  
    })
}








