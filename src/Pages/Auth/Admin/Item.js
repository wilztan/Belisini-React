import React, { Component } from 'react';
import Card from './../../../Components/Card';

export default class Item extends Component{
  render(){
    const {product,title }= this.props
    return(
      <div>
        <h3>{title}</h3>
        <div className="row">
          {product.map(function(product) {
            return(
              <div className="col-md-3" key={product.id}>
                <Card product={product}></Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
