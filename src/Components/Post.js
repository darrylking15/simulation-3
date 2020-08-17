import React, {Component} from 'react'


class Post extends Component {
    constructor(){
        super(); 
        this.state = {
            title: '', 
            img: '', 
            content:'', 
            author:'', 
            authorPicture: ''
        }
    }
    render() { 
        return ( <div>
                <h1>This is the Post component</h1>
                </div> );
    }
}
 
export default Post;