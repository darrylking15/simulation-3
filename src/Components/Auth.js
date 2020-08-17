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
        return (<div className='Auth'>
                <div className= 'login_container'>
                <img src={helo} alt="helo_logo"/>
                <h1>Helo</h1>
                </div>
               <input name='email' type='text' value={email} placeholder='Email'/>
               <input name='password' type='text' value={password} placeholder='Password'/>
               
               
               <div className="btn-container">
               <button className='login_button' > Login </button>
               <button className='register_button' > Register </button>
              