import React, {Component} from 'react'


class Form extends Component {
    constructor(){
        super()
        this.state = { 
            title:'', 
            img: '', 
            content:''
         }
    }
    
    
    render() { 
        return ( <div>
                <h1>This the Form Component</h1>
                </div> );
    }
}
 
export default Form;