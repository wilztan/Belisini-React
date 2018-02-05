import React, { Component } from 'react';import {
  Link,
} from "react-router-dom";
import './Card.css';

export default class Card extends Component{
  render(){
    const {product} = this.props;
    var url = '/product/'+product.name+'/'+product.id;
    return(
      <div>
        <Link to={url}>
          <div class="card">
            <img src={product.image} alt="Avatar"/>
            <div class="card-container">
              <h4><b>{product.name}</b></h4>
              <p>{product.stock}</p>
              <p>{product.price}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
