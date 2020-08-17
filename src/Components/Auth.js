import React, {Component} from 'react';
import helo from "./helo.png"




class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '', 
            password: '', 
            newUser: false
        }
    }



    toggle  = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }
    render() {
        return (
          <div className='Auth'>
            <div className='container'>
              <img src={helo} alt='helo_logo' />
              <h1 className='helo_title'>Helo</h1>
              
              <div className='auth_input_box'>
            
              <input name='email' type='text' value={this.state.username} placeholder='Email'/>
               
              </div>
              <div className='auth_input_box'>
              <input name='password' type='text' value={this.state.password} placeholder='Password'/>
              </div>
              <div className='auth_button_container'>
              <button className="login-button" > Login</button>
              <button className="register-button" > Register</button>
              </div>
            </div>
          </div>
        );
      }
    }



    export default Auth