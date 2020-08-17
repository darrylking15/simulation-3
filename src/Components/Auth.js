import React, {Component} from 'react';
import helo from "./helo.png"




class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '', 
            password: ''
        }
    }
    render() { 
        const {email, password} = this.state
        return (
            <div className='Auth'>
          
                <img src={helo} alt="helo_logo"/>
                <h1 className='helo_title'>Helo</h1>
                
               
               
               <input name='email' type='text' value={email} placeholder='Email'/>
               <input name='password' type='text' value={password} placeholder='Password'/>
               
               
             
               <button className="login-button" > Login</button>
               <button className="register-button" > Register</button>
               </div>



    