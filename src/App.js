import React, {Component} from 'react';
import './reset.css';

// import Auth from './Components/Auth'
// import Dashboard from './Components/Dashboard'
// import Form from './Components/Form'
import Nav from './Components/Nav'
// import Post from './Components/Post'
import './index.css'
import routes from './Components/routes'





class App extends Component() {
  constructor(){
    super()
    this.state = {
      newUser: false
    }
  }
  
  
  
  render(){
  return (
    <div className="App">
     
      <Nav/>
      {!this.state.newUser} ?
      {routes}
    </div>
  );
}
}
export default App;
