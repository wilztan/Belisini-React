import React, { Component } from 'react';

import Navbar from './../Components/Navbar';

export default class App extends Component{
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
