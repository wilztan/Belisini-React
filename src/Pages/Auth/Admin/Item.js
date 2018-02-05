import React, { Component } from 'react';
import Card from './../../../Components/Card';

export default class Item extends Component{
  render(){
    const {product }= this.props
    return(
      <div>
        <div className="row">
          {product.map(function(product) {
            return(
              <div className="col-md-3">
                <Card product={product}></Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
