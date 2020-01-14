class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //react tools
  //react router
  //utility libs(lodash e.t.c)
  //glamourous for styling react
  //gatsby.js(react)
  //next.js
  //material ui component
  //redux-saga
  //immutable.js
  //do i really need the libraries, what is the benefit
  //always consider pros n cons(what is te best libs)
  //how to render react using various methods
  //te first method would be 
  function tick(){
    const element = (
      <div>
        <h1>hello, world</h1>
    <h2>it is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(
      element, 
      document.getElementById('root')
    );
  }
  setInterval(tick, 1000)
  //lets make this clock component trully reuusable and escapsulated
  //it will set up its own timer and update itself every sec
  //we can start by encappsulating how the clock looks
  function clock(props){
    return(
      <div>
        <h1>Hello world</h1>
    <h2>it is {props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }  
  function tick(){
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  //ideally we want to write this once and have the clock update itself
  ReactDOM.render(
    <clock/>,
    document.getElementById('root')
  )
  //to implement this we need to add a state to the clock component.
  //state is similar to props, but it is private and fully controlled by the component
  //lets convert a function into a class
  //we can convert a function into a class in five steps
  //1. create an ES6 class with the same name that extends React.component
  //add a single empty method to it called render()
  //move the body of the function into te render() method
  //replace props with this.props in the render() body
  // delete te remaining nction declaration
  //e.g
  class Clock extends React.Component {
    render(){
      return(
        <div>
          <h1>hello world</h1>
      <h2>it is {this.props.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }
  //the render metod will e called each time an pdate happens

  //adding local state to a class
  //1. replace this.props.date with this.state.date in the render method
  class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  // add a constructor that assigns the initial this.state
  class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //add a class constrctor to the initial this.state
  class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  // the result looks like this
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  //Adding Lifecycle Methods to a Class
  //in applications with many components, its very important to free p resources
  //we can declare special methods on the component class to rn some code when a component mounts and unmounts
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    }
  //finally we will implement a method tick() that d clock component will run every second
  //it will use this.setState() to schedule updates to d component local state
 //code up
 ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
/*
Let’s quickly recap what’s going on and the order in which the methods are called:

When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
*/
//to use state correctly
/*
1.do not modify state directly
e.g this.state.comment ='hello' is wrong
instead use setState();
this.setState( {comment: 'hello'}); 
the only place to assign this.state is the constructor
STATE UPDATE MAY BE ASYNCHRONOUS
react may batch multiple setState() calls into a single upddate for performance
 because this.props and this.state may be updated asynchronosly, one should not rely on their value for d next state
  
 e.g this code may fail to update the counter
 // Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
to fix it,use the second form of setState() that accepts a function rather than an object. 
That function will receive the previous state as the first  argment and the props at the time te update is applied as the second argument;
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));


STATE UPATES ARE MERGED
when setState() is called react merges the object provided into te crrent state
e.g
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
  then it can e updated independently with seperate setState() calls:
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }

   state is always owneed by a specific componenet and any data or ui
   derived from that state can only affect componenets below them in the tree.


   to show that all components are trully isolated we can create an app component that renders three clocks
   function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

HANDLING EVENTS WITH REACT JS
 react events are named using camelCase rather than lowercase
 with jsx a function is passed as the event handler rather than a string
 e.g
 <button onClick = "activateLasers()">
 Activate Lasers
 </button>

 in react is written as 
 <button onClick = {activateLasers}>
 Activate Lasers
 </button>

 when a component is defined using an es6 class, a common pattern is for an event handler to be a method on te class
 e.g
 this toggle component renders a button that lets the user toggle etween ON and OFF
 states

 class Toggle extends React.Component {
   constructor(props){
     super(props);
     this.state = {isToggleOn: true};
     // this inding is neccessary to make 'this' work in the callback

     this.handleClick = 
     this.handleClick.bind(this);
   }
   handleClick(){
     this.setState(state => ({
       isToggleOn: !state.isToggleOn
     }));
   }
   render (){
     return (
      < button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
     );
   }
 }
 ReactDOM.render (
   <Toggle/>
   docment.getElementyId('root')
 );

 
*/
