import  React, { Component }  from 'react';

class Demo  extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 123
        }
    }

    render(){
        return (
            <div>
                <h2>Welcome to React</h2>
                <span>1234</span>
            </div>
        )
    }
}

export default Demo;
