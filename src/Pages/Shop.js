import React, { Component } from 'react';
import Card from './../Components/Card'

const product = [
  {
    id:'1',
    product: 'React E-Book',
    link: 'https://facebook.github.io/react/',
    price: 'Jordan Walke',
    stock: '10',
  },

  {
    id:'1',
    product: 'Laravel E-Book',
    link: 'https://facebook.github.io/react/',
    price: 'Jordan Walke',
    stock: '10',
  },

  {
    id:'1',
    product: 'Bootstrap E-Book',
    link: 'https://facebook.github.io/react/',
    price: 'Jordan Walke',
    stock: '10',
  },

  {
    id:'1',
    product: 'Adonis E-Book',
    link: 'https://facebook.github.io/react/',
    price: 'Jordan Walke',
    stock: '10',
  },

  {
    id:'1',
    product: 'Express JS E-Book',
    link: 'https://facebook.github.io/react/',
    price: 'Jordan Walke',
    stock: '10',
  },
];

export default class Shop extends Component{
  render(){
    return(
      <div className="section-main container">
        <div className="row">
          {product.map(function(product) {
            return (
                <div className="col-md-3 col-xs-6">
                  <Card product={product}/>
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}
