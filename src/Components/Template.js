import React, { Component } from 'react';

import Navbar from './../Components/Navbar';

export default class Template extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {children} = this.props;
    return(
      <div className="App">
        <Navbar/>
        {children}
      </div>
    );
  }
}
