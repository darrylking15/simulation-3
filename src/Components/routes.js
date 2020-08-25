import React from 'react'
import{ Switch, Route} from "react-router-dom";
import Auth from './Auth'; 
import Dashboard from "./Dashboard";
import Form from "./Form";
import Post from "./Post";



export default(


<Switch>
      <Route  exact path='/' component={Auth}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/post/:postid' component={Post}/>
      <Route path='/new' component={Form}/>
      
    </Switch>


)