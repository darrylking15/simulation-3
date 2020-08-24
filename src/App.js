import React, {Component} from 'react';
import './reset.css';

// import Auth from './Components/Auth'
// import Dashboard from './Components/Dashboard'
// import Form from './Components/Form'
import Nav from './Components/Nav'
// import Post from './Components/Post'
import './index.css'
import routes from './Components/routes'
import {withRouter} from 'react-router-dom'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newUser: false
    }
  }
  
  
  
  render(){
  return (
    <div className="App">
      <Nav/>
     {routes}
    </div>
  );
}
}
export default withRouter(App);
