import React, {Component} from 'react';
import helo from "./helo.png"
import axios from 'axios';
import {updateUser} from './ducks/reducer'
import { connect } from 'react-redux';



class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '', 
            password: '', 
            newUser: false
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    handleChange(prop, val){
      if(val.length < 20){
        this.setState({
          [prop] : val
        })
      }
    }



    login(){
      axios.post('/api/auth/login', this.state)
      .then(res => {
        this.props.updateUser(res.data)
        this.props.history.push('/dashboard')


      })
    }
    

    register(){
      axios.post('/api/auth/register', this.state)
      .then(res => {
        this.props.updateUser(res.data); 
        this.props.history.push('/dashboard')
      })
    }
    
    render() {
        return (
          <div className='Auth'>
            <div className='container'>
              <img src={helo} alt='helo_logo' />
              <h1 className='helo_title'>Helo</h1>
              
              <div className='auth_input_box'>
            
              <input name='email' type='text' value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} placeholder='Email'/>
               
              </div>
              <div className='auth_input_box'>
              <input name='password' onChange={e => this.handleChange('password', e.target.value)} type='text' value={this.state.password} placeholder='Password'/>
              </div>
              <div className='auth_button_container'>
              <button className="login-button" onClick={this.login}> Login</button>
              <button className="register-button" onClick={this.register}> Register</button>
              </div>
            </div>
          </div>
        );
      }
    }

   
    export default Auth
    // export default connect(null, {updateUser})(Auth)