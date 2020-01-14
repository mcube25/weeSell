/*
backend r in charge of servres and server delivery
most basic website ses lamp stack i.e
linux apache-server 
application server(node.js, express.js), we can write js
 backend makes sure we receive correct data


 INTRO TO APIS(application prograamming interface);
 it allows stranger speak to each other
 it allows computers communicate
 fetch () is an eample of apis
 By the way, this is my favourite resource for finding an API when I have an idea for a project: https://apilist.fun/
*/
//conditional rendering
/*
in react  can create distinct components tat escapsulate behavior needed then render only some of them depending on hte state of the application
consider these two components
*/
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  //create a greeting component that displays either of te above component depending on whether a user is logged in
  function Greeting(props){
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn){
          return <UserGreeting/>
      }
      return <GuestGreeting/>
  }
  ReactDOM.render(
      <Greeting isLoggedIn={true}/>,
      document.getElementById('root')
  );