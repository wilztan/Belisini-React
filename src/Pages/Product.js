import React, { Component } from 'react';
import Panel from './../Components/Panel';
import ApiRoute from './../Components/ApiRoute';
import TransactionButton from './../Components/TransactionButton';

export default class Product extends Component{
  constructor(props){
    super(props);
    this.state={
      product:[],
      user:0,
    }
    this.fetchProduct = this.fetchProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }
  fetchProduct(){
    var url= ApiRoute.getProductPath()+'/'+this.props.match.params.name+'/'+this.props.match.params.id;
    // alert(url);
    fetch(url)
    .then(response => response.json())
    .then(result => this.setProduct(result))
    .catch(e => e);
  }
  setProduct(product){
    // alert(JSON.stringify(product));
    this.setState({product:product.product});
  }
  componentDidMount(){
    this.fetchProduct();
  }
  onBuyTransaction(){

  }
  render(){
    const {product} = this.state;
    return(
      <div className="section-main">
        <div className="row">
          <div className="col-md-4">
            <img
              style={{width:'100%'}}
              src={product.image}
              alt="product"
            />
          </div>

          <div className="col-md-8">
            <Panel>
              <h4>{product.name}</h4>
              <p>Information About Product</p>
              <p>Seller : {product.owner_id}</p>
              <p>Price : {product.price}</p>
              <p>stock : {product.stock}</p>
              {product.description}
            </Panel>

            <TransactionButton
              item_id={product.id}
            />

          </div>

        </div>
      </div>
    );
  }
}
