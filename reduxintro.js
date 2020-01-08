class clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render() {

        return(
            <div>
<h1>hello world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>

            </div>
        );
    }
} 
ReactDOM.render(
    <clock/>,document.getElementById('root');

);
/*
error bondary in react
create a file for the error boundary
 
*/