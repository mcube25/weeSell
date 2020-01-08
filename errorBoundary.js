import React, {component} from 'react';


class ErrorBoundry extends component {
    constructor(props){
super(props);
this.state = {
    hasError:  false
}
    }
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }
    render(){
        if (this.state.hasError){
            return <h1>has error</h1>
        }
        return this.props.children
    }
}
//on the app file wrap the errorBoundary around the scroll  button like
/*
<div>
<h1></h1>
<searchBox/>
<scroll>
<ErrorBoundry>
<cardlist/>
</ErrorBoundry>
</scroll>
</div>
*/
export default ErrorBoundry;