import React, { Component } from 'react';

export default class Contact extends Component{
  render(){
    const marginnavbar = {
      marginTop: '100px',
    };
    return(
      <div className="container contact-start" style={marginnavbar}>
          <div className="row">
            <div className="col-md-6">
              <form action="" method="POST">
              	<legend>Send Us Email</legend>

              	<div className="form-group">
              		<input type="email" className="form-control" id="" placeholder="Email"/>
              	</div>

              	<div className="form-group">
              		<input type="text" className="form-control" id="" placeholder="Name"/>
              	</div>


              	<div className="form-group">
              		<input type="number" className="form-control" id="" placeholder="Phone"/>
              	</div>

              	<div className="form-group">
              		<input type="text" className="form-control" id="" placeholder="Subject"/>
              	</div>


              	<div className="form-group">
              		<textarea type="text" className="form-control" id="" placeholder="Message" rows="6"></textarea>
              	</div>
              	<button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
