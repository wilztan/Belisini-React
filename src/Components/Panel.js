import React, { Component } from 'react';

export default class Panel extends Component{
  render(){
    const {children,header}=this.props;
    function headerExist() {
      if(header==null){
        return ('');
      }
      return (<div className="panel-heading">{header}</div>);
    }
    return(
      <div>
        <div className="panel panel-default">
            {headerExist()}
            <div className="panel-body">
              {children}
            </div>
        </div>
      </div>
    );
  }
}
