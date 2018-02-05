import React, { Component } from 'react';

import FormInput from './../../../Components/FormInput';
import Panel from './../../../Components/Panel';
import ApiRoute from './../../../Components/ApiRoute';
import AuthChecker from './../../../Components/AuthChecker';
import image from './../../../logo.svg';

export default class FormItem extends Component{
  constructor(props){
    super(props);
    this.state={
      product:{
        name:'',
        price:'',
        stock:'',
        image:'',
        description:'',
      },
      image:'',
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }
  handleResult(result){
    alert(JSON.stringify(result));
  }
  handleSubmitForm(e){
    e.preventDefault();
    var data = new FormData();
    // data.append('image', this.state.product.image);
    // data.append('name', this.state.product.name);
    // data.append('stock',this.state.product.stock);
    // data.append('price',this.state.product.price);
    // data.append('description',this.state.product.description);
    alert(JSON.stringify(this.state.product));
    var token = AuthChecker.getUserCookie("PassportToken");
    var item = JSON.stringify(this.state.product);
    alert(item);
    fetch(ApiRoute.getProductResourcePath(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization':`Bearer ${token}`,
        // 'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(this.state.product)
    })
    .then(response => response.json())
    .then(result => this.handleResult(result))
    .catch(e => e);
  }
  handleImageChange(e){
  }
  handleInputChange(key,e){
    var state = Object.assign({}, this.state.product);
    if(key==="image"){
      state[key] = e.target.files[0];
    }else{
      state[key] = e.target.value;
    }
    this.setState({product:state});
  }
  render(){
    const {header, method}= this.props;
    return(
      <Panel header={header}>
        <form onSubmit={this.handleSubmitForm} encType="multipart/form-data">
          <FormInput placeholder="Product Name" type="text" onChange={(e)=>this.handleInputChange("name",e)}/>

          <FormInput placeholder="Product Price" type="number" onChange={(e)=>this.handleInputChange("price",e)}/>

          <FormInput placeholder="Product Stock" type="number" onChange={(e)=>this.handleInputChange("stock",e)}/>

          <FormInput placeholder="Product Image" type="file" onChange={(e)=>this.handleInputChange("image",e)}/>

          <textarea placeholder="Product Description" onChange={(e)=>this.handleInputChange("description",e)} className="form-control" />
          <button className="btn btn-submit">Create New Product</button>
        </form>
      </Panel>
    );
  }
}
