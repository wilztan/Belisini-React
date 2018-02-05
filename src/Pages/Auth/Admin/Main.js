import React, { Component } from 'react';
import Panel from './../../../Components/Panel';

export default class Main extends Component{
  render(){
    const {user} = this.props;
    return(
      <div>
        <h2>Welcome {user}</h2>
        <div className="row">
          <div className="col-md-4">
            <Panel header="Total Sales">
              <h3>$1000</h3>
            </Panel>
          </div>
          <div className="col-md-4">
            <Panel header="Product Sold">
              <h3>300</h3>
            </Panel>
          </div>
          <div className="col-md-4">
            <Panel header="Total Customer">
              <h3>200 Person</h3>
            </Panel>
          </div>
        </div>
        <div>
          <Panel header="Information Board">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              liqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </Panel>
        </div>
      </div>
    );
  }
}
