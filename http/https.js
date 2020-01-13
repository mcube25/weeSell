/*
protocol is a stanard everyone follows
http is a protocol or ruote is a foundation for file transfer
it is the bridge btw d server and the client
request andd response
GET means get data
POST send data to database
PUT update data
DELETE a piece of data from the data base
they r the request protocol
server sends u a message e.g
200 msg, 404 e.t.c

JSON
stands for javascript object notation
it is a syntax for storing and exchanging data
it is text, written with javascript object notation
it saves band width when communicating between servers and client
it can be read by any language
  JSON.parse()
  var obj = JSON.parse('{"name":"john","age":30,"city":"New York"}');


  JSON.stringify()
  var myJSON = JSON.stringify(obj);

  Originally, the only way to submit some form data to a server was through the <form> tag in HTML. As we have learned, it can do a POST or a GET request. With JSON you can now grab the contents of the <input> in a form and submit those with JSON instead of as a form data. You can now submit to the server whenever you want without it necessarily being a <form>, through AJAX.. What is AJAX you might say?

  AJAX
  it allows u to read from a webpage, intreract with thhat data,load the data n get a response
  it is a method
  jquery
  fetch is the new method
AJAX uses the fetch method


promises//
they r a new feature in js
a promise is an object that may produce a single value some time in the future
either a resolved value or a reason that its not resolved
e,g 
fufilled
rejected
or e
create a promise
const promise = new promise ()
*/
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

//solution
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000)
  });
  
  // #2) Run the above promise and make it console.log "success"
  promise.then(console.log)
  // or
  promise.then(resp => console.log(resp))
  
  // #3) Read about Promise.resolve() and Promise.reject(). How can you make
  // the above promise shorter with Promise.resolve() and console loggin "success"
  const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)
  );
  
  // #4) Catch this error and console log 'Ooops something went wrong'
  Promise.reject('failed')
    .catch(console.log('Ooops something went wrong'))
  
  // #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
  // Console.log the output and make sure it has a catch block as well.
  const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url =>
      fetch(url).then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));
  
  // #6) Change one of your urls above to make it incorrect and fail the promise
  // does your catch block handle it?

  /*
  ES8
  async await is a new feature of es8 which builds on promises
  e.g 
  async function playerStart() {
   await movePlayer {100, 'left'}   
  }  
  */
 //exercise
 // Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
.then(response => response.json())
.then(console.log)


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
));
console.log('users', users);
console.log('posta', posts);
console.log('albums', albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholdeTYPO.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]

//solution
  
// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json();
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

/*
es9
three main new featuures
object spread operator
e.g 
const animals = {
    tiger: 33,
    lion: 115,
    monkey: 88
    bird: 40
}
function objectSpread(p1, p2, p3){
    console.log(p1)
     console.log(p2)
      console.log(p3)
}
const{tiger, lion, ...rest} = animals;
objectSpread (tiger, lion, rest);

ES9 async
the finally method
.finally()
forAwaitOf method
allows to iterate over promises
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}


const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here'))




const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json(); 
    console.log(data)
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}


restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}


const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here'))




const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json(); 
    console.log(data)
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}




 */
