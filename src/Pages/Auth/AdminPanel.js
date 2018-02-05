import React, { Component } from 'react';
import './AdminPanel.css';
import Sidebar from './../../Components/Sidebar';
import Dashboard from './../../Components/Dashboard';


import Main from './Admin/Main';
import Item from './Admin/Item';
import Profile from './Admin/Profile';
import FormItem from './Admin/FormItem';

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

class AdminPanel extends Component{
  constructor(props) {
    super(props);
    this.state={
      page:0,
    }
    // This line is important!
    this.getPage = this.getPage.bind(this);
  }

  getPage(pages) {
    this.setState({
      page: parseInt(pages)
    });
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
        name:'My Cart',
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
          return(<Item product={product} />);
          break;
        case 2:
          return(<Item product={product} />);
          break;
        case 3:
          return(<Item product={product} />);
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
                  <a  onClick={()=>this.getPage(listButton.link)} value={listButton.link} className="btn btn-submit">{listButton.name}</a>
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
