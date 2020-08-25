import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logOutUser, getUser} from './ducks/reducer'
import {Link} from 'react-router-dom'
import home from './home.png'
import newPost from './newPost.png'
import logout from './logout.png'







class Nav extends Component {
    constructor(props){
        super(props); 
        this.state ={
            
        }
    }
    render() { 
        return ( <div>
                {function SideNav(props) {
  if (props.location.pathname !== '/') {
    console.log('nav', props)
    return (
      <div className='Nav'>
        <div className='nav_container'>
          <div className='profile_pic' style={{ backgroundImage: `url('${props.profilePic}')` }}></div>
          <p>{props.username}</p>
        </div>
        <div className='nav_links'>
          <Link to='/dashboard'><img className='nav_logo' src={home} alt='home' /></Link>
          <Link to='/new'><img className='nav_img' src={newPost} alt='new post' /></Link>
        </div>
        <Link to='/' onClick={props.logout}><img className='nav_img logout' src={logout} alt='logout' /></Link>
      </div>
    )
  } else {
    return null
  }
}}
                
                </div> );
    }
}
  

const mapStateToProps = state => state; 





export default connect(mapStateToProps, logOutUser, getUser)(Nav);