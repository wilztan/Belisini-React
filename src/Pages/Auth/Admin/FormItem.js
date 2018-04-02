import React, { Component } from 'react';

import FormInput from './../../../Components/FormInput';
import Panel from './../../../Components/Panel';
import ApiRoute from './../../../Components/ApiRoute';
import AuthChecker from './../../../Components/AuthChecker';

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
    this.handleResult = this.handleResult.bind(this);
  }
  handleResult(result){
    if(result.status>0)
    alert('success');
    //set function to another page
  }
  handleSubmitForm(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('image', event.target.myimage.files[0]);
    formData.append('name', event.target.name.value);
    formData.append('price', event.target.price.value);
    formData.append('stock', event.target.stock.value);
    formData.append('description', event.target.description.value);
    var token = AuthChecker.getUserCookie("PassportToken");
    fetch(ApiRoute.getProductResourcePath(), {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
         body: formData,
    })
    .then(response => response.json())
    .then(result => this.handleResult(result))
    .catch(e => e);
  }
  render(){
    const {header}= this.props;
    return(
      <Panel header={header}>
        <form onSubmit={this.handleSubmitForm} encType="multipart/form-data">
          <FormInput
            placeholder="Product Name"
            type="text"
            name="name"
          />

          <FormInput
            placeholder="Product Price"
            type="number"
            name="price"
          />

          <FormInput
            placeholder="Product Stock"
            type="number"
            name="stock"
          />

          <FormInput
            placeholder="Product Image"
            type="file"
            name="myimage"
          />

          <textarea
            name="description"
            placeholder="Product Description"
            className="form-control"
          />
          <button className="btn btn-submit">Create New Product</button>
        </form>
      </Panel>
    );
  }
}
