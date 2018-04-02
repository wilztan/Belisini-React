import React, { Component } from 'react';

export default class Sidebar extends Component{
  render(){
    const {children} = this.props;
    return(
      <div className="btn-group-vertical">
        {children}
      </div>
    );
  }
}
