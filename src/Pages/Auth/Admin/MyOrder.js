import React, { Component } from 'react';
import ApiRoute from './../../../Components/ApiRoute';
import AuthChecker from './../../../Components/AuthChecker';

export default class MyOrder extends Component{
  constructor(props){
    super(props)
    this.state={
      product:[]
    }
    this.handleGetItem = this.handleGetItem.bind(this);
    this.handleSetProduct = this.handleSetProduct.bind(this);
  }

  handleGetItem(){
    var token = AuthChecker.getUserCookie("PassportToken");
    fetch(ApiRoute.getUserOrder(), {
        method: 'GET',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
    })
    .then(response => response.json())
    .then(product => this.handleSetProduct(product))
    .catch(e => e);
  }

  handleSetProduct(product){
    this.setState({product:product.transaction})
    // alert(JSON.stringify(product));
  }

  componentDidMount(){
    this.handleGetItem();
  }

  render(){
    return(
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.product.map((product,index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>1</td>
                <td>{product.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
