import React, { Component } from 'react';
import './AdminPanel.css';
import Sidebar from './../../Components/Sidebar';
import Dashboard from './../../Components/Dashboard';
import ApiRoute from './../../Components/ApiRoute';
import AuthChecker from './../../Components/AuthChecker';


import Main from './Admin/Main';
import Item from './Admin/Item';
import Profile from './Admin/Profile';
import FormItem from './Admin/FormItem';
import MyOder from './Admin/MyOrder';
import MyTransaction from './Admin/MyTransaction';


class AdminPanel extends Component{
  constructor(props) {
    super(props);
    this.state={
      page:0,
      product:[],
      transaction:[],
      order:[],
    }
    // This line is important!
    this.getPage = this.getPage.bind(this);
    this.getMyProduct = this.getMyProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }

  getPage(pages) {
    this.setState({
      page: parseInt(pages,0),
    });
  }

  getMyProduct(){
    var token = AuthChecker.getUserCookie("PassportToken");
    fetch(ApiRoute.getMyProduct(), {
        method: 'GET',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
    })
    .then(response => response.json())
    .then(product => this.setProduct(product))
    .catch(e => e);
  }

  setProduct(product){
    this.setState({product:product.product});
  }

  componentDidMount(){
    this.getMyProduct();
  }

  render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    const listButton = [
      {
        name:'Dashboard',
        link:'0',
      },
      {
        name:'Add New Product',
        link:'5',
      },
      {
        name:'My Product',
        link:'1',
      },
      {
        name:'My Order',
        link:'2',
      },
      {
        name:'My Transaction',
        link:'3',
      },
      {
        name:'Profile',
        link:'4',
      },
    ];
    const Page =() =>{
      switch (this.state.page) {
        case 0:
          return(<Main/>);
          break;
        case 1:
          return(
            <Item
              title="Your Selling Item"
              product={this.state.product}
            />
          );
          break;
        case 2:
          return(
            <MyOder/>
          );
          break;
        case 3:
          return(
            <MyTransaction
            />
          );
          break;
        case 4:
          return(<Profile/>);
          break;
          case 5:
          return(<FormItem/>);
          break;
        default:
          return(<Main/>);
      }
    }
    return (
      <div className="adminpanel-start">
        <div className="row">
          <div className="col-md-2 sidebar-panel">
            <Sidebar>
              {listButton.map((listButton,index)=>{
                return(
                  <a  key={index} onClick={()=>this.getPage(listButton.link)} value={listButton.link} className="btn btn-submit">{listButton.name}</a>
                );
              })}
            </Sidebar>
          </div>
          <div className="col-md-10">
            <Dashboard>
              {Page()}
            </Dashboard>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
