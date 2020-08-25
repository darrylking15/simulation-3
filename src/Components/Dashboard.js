import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./ducks/reducer";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userposts: true,
      username: "",
      changedUserName: "",
    };
  }

  handleChange(value) {
    this.setState({
      username: value.target.value,
    });
  }

  submitUser() {
    console.log(this.state.username)
    axios
      .put(`/auth/user/${this.props.username.userId}?username=${this.state.username}`) 
      .then((res) =>
        this.setState({
          changedUserName: res.data,
        })
        
      );
  }

  render() {
    return (
      <div>
        {this.state.changedUserName}
        <input
          onChange={(e) => this.handleChange(e)}
          placeholder={this.props.username.username}
          value={this.state.username}
          type="text"
        />
        <button onClick={() => this.submitUser()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, loginUser)(Dashboard);
