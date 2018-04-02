
/**
*
* Transaction Button
*
*/

import React, { Component } from 'react';
import ApiRoute from './ApiRoute';
import AuthChecker from './AuthChecker';

export default class TransactionButton extends Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      auth:0,
      token:'',
      ...props
    }
    this.handleInfo = this.handleInfo.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.buyItem = this.buyItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  handleInfo(result){
    if(result.message==="Unauthenticated."){
        this.handleLogout();
    }else{
      this.setState({
        user:result.id,
        auth:1,
      });
      // alert(JSON.stringify(result));
    }
  }
  handleUser(){
    var token = AuthChecker.getUserCookie("PassportToken");
    if(token===''){
      this.setState({auth:0});
    }else{
      this.setState({token:token})
      fetch(ApiRoute.getProfilePath(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(response => response.json())
      .then(result => this.handleInfo(result))
      .catch(e => e);
    }
  }
  componentDidMount(){
    this.handleUser();
  }
  buyItem(){
    var item_id = this.props.item_id;
    var token = this.state.token;
    fetch(ApiRoute.getTransaction(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body:JSON.stringify({
        item_id:item_id,
        status:'buy',
      }),
    })
    .then(response => response.json())
    .then(result => alert('Item Bought'))
    .catch(e => e);
  }
  addToCart(){
    var token = this.state.token;
    fetch(ApiRoute.getProfilePath(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body:JSON.stringify({
        item_id:this.props.item_id,
        status:'addToCart',
      }),
    })
    .then(response => response.json())
    .then(result => alert('added to Cart'))
    .catch(e => e);
  }
  render(){
    return this.state.auth===1?(
      <div>
        <button
          className="btn btn-warning"
          style={{backgroundColor:"#FE964A"}}
          onClick={(e)=>this.addToCart()}
          >
          Add To Cart
        </button>

        <button
          onClick={(e)=>this.buyItem()}
          className="btn btn-warning"
          >
            Buy Now
        </button>
      </div>
    ):(
      <div>please Log in to do transaction</div>
    )
  }
}
