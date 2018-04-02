import React, { Component } from 'react';
import './Profile.css';

import Panel from './../../../Components/Panel';
import ApiRoute from './../../../Components/ApiRoute';
import AuthChecker from './../../../Components/AuthChecker';
import image from './../../../logo.svg';

export default class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      user:[],
    };
    this.handleInfo = this.handleInfo.bind(this);
    this.fetchUser=this.fetchUser.bind(this);
  }
  fetchUser(){
    var token = AuthChecker.getUserCookie("PassportToken");
    if(token===''){
      this.setState({auth:0});
    }else{
      fetch(ApiRoute.getProfilePath(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(response => response.json())
      .then(result => this.handleInfo(result))
      .catch(e => e);
    }
  }
  handleInfo(result){
    this.setState({user:result});
  }
  componentDidMount(){
    this.fetchUser();
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-4">
            <img
              alt="Profile"
              className="App-logo"
              src={image}
            />
          </div>
          <div className="col-md-8">
            <Panel header="Profile Information">
              <p>Username : {this.state.user.name}</p>
              <p>Email : {this.state.user.email}</p>
              <p>Password : {this.state.user.password}</p>
              <p>Description : {this.state.user.description}</p>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}
