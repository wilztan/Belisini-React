import React, { Component } from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

export default class RouteAuth extends Component{
  render(){
    let {check,component,redirect,path,name,exact,strict} = this.props;
    let routeProps={
      path,
      component,
      name,
      exact,
      strict
    }
    return check ? <Route {...routeProps} />:<Redirect to={redirect} />
  }
}
