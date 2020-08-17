import React, {Component} from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [], 
            search: "", 
            userposts: true
        }
    }
    render() { 
        return (  <div>
            <h1> This is the Dashboard Component</h1>
        </div>);
    }
}
 
export default Dashboard;