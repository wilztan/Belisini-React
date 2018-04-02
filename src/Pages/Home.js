import React, { Component } from 'react';
import './Home.css';

import Carousel from './../Components/Carousel';
import Panel from './../Components/Panel';
import Card from './../Components/Card';
import ApiRoute from './../Components/ApiRoute';

/**
* Flow to create this Application
* 1. Create your View
* 2. Define Animation or function
* 3. Create States
* 4. Apply
*
* DO NOT USE STATE WHEN YOU START YOUR CODE
* FINISH YOUR VIEW FIRST IF YOU ARE A BEGINER
*/


const categories =[
  {
    categories:'fashion',
  },
  {
    categories:'sports',
  },
  {
    categories:'phone & accessories',
  },
];





class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        filter:{
          name:'',
          price:''
        },
        product: [],
    };
    this.fetchProduct = this.fetchProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.onChangeMoreNameForm = this.onChangeMoreNameForm.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.FilterProduct = this.FilterProduct.bind(this);
  }
  renderProduct() {
    return (
      <div>
        {this.state.product.map((product,index) => (
          <div key={product.id} className="col-md-3 col-xs-6">
            <Card product={product}/>
          </div>
        ))}
      </div>
    );
  }

  /**
  *
  * Product state are written with this function
  *
  */

  setProduct(product){
    // alert(JSON.stringify(product));
    this.setState({ product:product.product });
  }
  fetchProduct(){
    var url = ApiRoute.getProductPath();
    // alert(url);
    fetch(url)
    .then(response => response.json())
    .then(result => this.setProduct(result))
    .catch(e => e);

  }
  onChangeMoreNameForm(e){
    e.preventDefault();
    if(e.target.value===""){
      this.setState({nameQuery:''})
    }else{
      this.setState({nameQuery:e.target.value})
      this.fetchProduct();
    }
  }

  handleFilterChange(key,e){
    var state = Object.assign({}, this.state.filter);
    state[key] = e.target.value;
    this.setState({filter:state});
  }
  FilterProduct (product){
    if(this.state.filter.name==='' && this.state.filter.price===''){
      return product.name.toLowerCase().includes("") && product.price.toLowerCase().includes("");
    }else{
      if(this.state.filter.name==='' && this.state.filter.price!==''){
        return product.name.toLowerCase().includes('') && product.price.toLowerCase().includes(this.state.filter.price.toLowerCase());
      }
      if(this.state.filter.name!=='' && this.state.filter.price===''){
        return product.name.toLowerCase().includes(this.state.filter.name.toLowerCase()) && product.price.toLowerCase().includes('');
      }
      if(this.state.filter.name!=='' && this.state.filter.price!==''){
        return product.name.toLowerCase().includes(this.state.filter.name.toLowerCase()) && product.price.toLowerCase().includes(this.state.filter.price.toLowerCase());
      }
    }
  }
  componentDidMount(){
    this.fetchProduct();
  }
  render() {
    return (
      <div>
        <div className="row section-main">
          <div className="col-md-6">
            <img
              src="https://lorempixel.com/200/200/?39570"
              alt="Banner"
              ></img>
          </div>
          <div className="col-md-4">
            <div className="col-md-12">
              <Carousel/>
            </div>
            <div className="col-md-6 col-xs-6">
              <img
                src="https://lorempixel.com/200/200/?39570"
                alt="Banner"
              />
            </div>
            <div className="col-md-6 col-xs-6">
              <img
                src="https://lorempixel.com/200/200/?39570"
                alt="Banner"
              />
            </div>
          </div>
          <div className="col-md-2">
            <img
              src="https://lorempixel.com/200/200/?39570"
              alt="Banner"
            />
          </div>
        </div>

        <div className="row">
          <h3>Our Featured Product</h3>
          <div className="col-md-3">
            <Panel header="Categories">
              <ul>
                {categories.map(function(categories,index) {
                  return(
                      <li key={index}>{categories.categories}</li>
                  );
                })}
              </ul>
            </Panel>
          </div>
          <div className="col-md-9">
            {/* {this.renderProduct()} */}
            {this.state.product.filter((product)=>this.FilterProduct(product)).map((product,index) => (
              <div key={product.id} className="col-md-3 col-xs-6">
                <Card product={product}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
