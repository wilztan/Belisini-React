import React, { Component } from 'react';

export default class FormInput extends Component{
  render(){
    const {name,placeholder,type,onChange,value,} = this.props;
    return(
      <div className="form-group">
        <input className="form-control" value={value} name={name} placeholder={placeholder} type={type} onChange={onChange}/>
      </div>
    );
  }
}
