import React, { Component } from 'react';
import Panel from './../../Components/Panel';
import FormInput from './../../Components/FormInput';
import ApiRoute from './../../Components/ApiRoute'


export default class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      newUser:{
          name:'',
          password:'',
          password_confirmation:'',
          email:'',
      },
      result:[],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleInputChange(key,e){
    var state = Object.assign({}, this.state.newUser);
    state[key] = e.target.value;
    this.setState({newUser:state});
  }
  handleSubmitForm(e){
    if(this.state.newUser.name===null){
      alert('UserName must be filled');
    }
    e.preventDefault();
    fetch(ApiRoute.getRegisterPath(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newUser)
    })
    .then(response => response.json())
    .then(result => this.handleLogin(result))
    .catch(e => e);
  }
  handleLogin(item){
    this.setState({result:item});
    if(this.state.result.status ===true){
      // sessionStorage.setItem('jwt', this.state.result.data.accessToken);
      // localStorage.setItem(key, JSON.stringify(result.hits));
      var storedcookie = "PassportToken="+this.state.result.data.accessToken;
      document.cookie =storedcookie;
      // this.props.history.push("/main/admin");
      window.location.href = "/main/admin";
    }else {
      alert(JSON.stringify(item));
    }
  }
  render(){
    const btn ={
      background:'#ff9800',
    }
    return(
      <div>
        <div className="section-main container">
          <div className="row">
            <div className="col-md-offset-4 col-md-4">
              <Panel header="Register">
                <form onSubmit={this.handleSubmitForm}>
                  <FormInput placeholder="Name" type="text" name="name" onChange={(e)=>this.handleInputChange('name',e)} />
                  <FormInput placeholder="Email" type="email" name="email" onChange={(e)=>this.handleInputChange('email',e)} />
                  <FormInput placeholder="Password" type="password" name="password" onChange={(e)=>this.handleInputChange('password',e)} />
                  <FormInput placeholder="Confirm Password" type="password" name="cpassword" onChange={(e)=>this.handleInputChange('password_confirmation',e)} />
                  <button className="btn btn-submit" style={btn}>Login</button>
                </form>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
