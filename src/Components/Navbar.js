import React, { Component } from 'react';
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './Navbar.css';
import FormInput from './FormInput.js';
import AuthChecker from './AuthChecker';
import ApiRoute from './ApiRoute';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      user:[],
      auth:0,
    }
    this.handleUser = this.handleUser.bind(this);
    this.handleInfo= this.handleInfo.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleUser(){
    var token = AuthChecker.getUserCookie("PassportToken");
    if(token==''){
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
    if(result.message=="Unauthenticated."){
        this.handleLogout();
    }else{
      this.setState({
        user:result,
        auth:1,
      });
    }

  }
  handleLogout(){
    // sessionStorage.removeItem('jwt');
    AuthChecker.deleteUserCookie("PassportToken");
    // alert(document.cookie);
    this.setState({auth:0});
  }
  componentDidMount(){
    this.handleUser();
  }
  render() {
    const isAuthenticated = () =>{
      if(this.state.auth === 0 ){
        return(
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        );
      }
      return(
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.state.user.name} <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><Link to="/main/admin">Dashboard</Link></li>
              <li><a href="/" onClick={this.handleLogout}>Log Out</a></li>
            </ul>
          </li>
        </ul>
      );
    }
    return (
      <div className="navbar-fixed-top">
        <div className="main-header" align="right">
          <ul>
            <li>Situs jual beli online mudah & terpercaya</li>
          </ul>
        </div>
        <nav className="navbar navbar-default" role="navigation">
        	<div className="container-fluid">
        		<div className="navbar-header">
        			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        				<span className="sr-only">Toggle navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        			</button>
        			<Link className="navbar-brand" to="/">Belisini <small><small>v  .2.0</small></small></Link>

        		</div>


        		<div className="collapse navbar-collapse navbar-ex1-collapse">
        			<ul className="nav navbar-nav">
        				<li><Link to="/shop">Shop</Link></li>
        				<li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
        			</ul>
        			<form className="navbar-form navbar-left" role="search">
                <FormInput type="text" class="form-control" placeholder="Search"/>
        				<button type="submit" className="btn btn-default">Submit</button>
        			</form>
        			{isAuthenticated()}
        		</div>
        	</div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
