import React, { Component } from 'react';

export default class Sidebar extends Component{
  render(){
    const {children} = this.props;
    return(
      <div class="btn-group-vertical">
        {children}
      </div>
    );
  }
}
