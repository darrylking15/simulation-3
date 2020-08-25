import React, {Component} from 'react';
import helo from "./helo.png"
import axios from 'axios';
// import {updateUser} from './ducks/reducer'
import { connect } from 'react-redux';
import {loginUser} from './ducks/reducer'


class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '', 
            password: '', 
            profile_pic: '', 
            newUser: false
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

   handleChange(e){
     this.setState({
       [e.target.name]: e.target.value
     })
   }

    toggle = () => {
      this.setState({
        newUser: !this.state.newUser
      })
    }

    login = () => {
      const {username, password} = this.state
      axios.post('/auth/login', {username, password})
      .then(res => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')


      }).catch(err => {
        console.log(err)
        
      })
    }
    

    register = () => {
      const { username, password, profile_pic} = this.state
      axios.post('/auth/register', {username, password, profile_pic})
      .then(res => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      }).catch(err => {
        console.log(err)
        
      })
    }
    
    render() {
        const {username, password, profile_pic} = this.state; 
        console.log(this.props)
      
        return (
        
          
          
          <div className='Auth'>
            <div className='container'>
              <img src={helo} alt='helo_logo' />
              <h1 className='helo_title'>Helo</h1>
             {!this.state.newUser ?
             <div>
             <div className='auth_input_box'>
             <input onChange={e => this.handleChange(e)}  name='username' type='text' value={username} placeholder='Username'/>
             <br/>
             <input onChange={e => this.handleChange(e)}  name='password' type='password' value={password} placeholder='Password'/>
             </div>
             <div >

               <button  onClick={this.login} className='login-button'>Login</button>
               <button className='register-button' onClick={this.toggle}>Sign Up</button>
             </div>
             </div>
             
             :
            <div className='auth_input_box'>
             <input onChange={e => this.handleChange(e)}  name='username' type='text' value={username} placeholder='Username?'/>
             <br/>
             <input onChange={e => this.handleChange(e)}  name='password' type='password' value={password} placeholder='Password?'/>
             
             <br/>
             <input onChange={e => this.handleChange(e)}  name='profile_pic' type='text' value={profile_pic} placeholder='Profile Pic?'/>
             
             <div className='auth_button_container'>

               <button  onClick={this.register}  className='register-button'>Register</button>
               <button className='login-button-2' onClick={this.toggle}>Sign In</button>
             </div>
            
            
            </div>
            
            }
              
   
           
           
           
           
           
           
           
           </div>
          </div>
          
        );
      }
    }

    const mapStateToProps = state => state; 


    
    
     export default connect(mapStateToProps, {loginUser})(Auth)