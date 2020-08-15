import React from 'react';
import './App.css';
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Post from './Components/Post'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Switch>
      <Route exact path='/' component={Auth}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/post/:postid' component={Post}/>
      <Route path='/new' component={Form}/>
      
    </Switch>
    </div>
  );
}

export default App;
