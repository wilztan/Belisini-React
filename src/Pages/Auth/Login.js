import React, { Component } from 'react';
import Panel from './../../Components/Panel';
import FormInput from './../../Components/FormInput';
import ApiRoute from './../../Components/ApiRoute';


export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      user:{
        email:'',
        password:'',
      },
      result:[],
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmitForm(e){
    if(this.state.user.name===null){
      alert('UserName must be filled');
    }
    if(this.state.user.password===null){
      alert('Password must be filled');
    }
    e.preventDefault();
    fetch(ApiRoute.getLoginPath(), {
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
  handleLogin(result){
      this.setState({result:result});
      if(this.state.result.status ===true){
        // sessionStorage.setItem('jwt', this.state.result.data.accessToken);
        var storedcookie = "PassportToken="+this.state.result.data.accessToken;
        document.cookie =storedcookie;
        // this.props.history.push("/main/admin");;
        window.location.href = "/main/admin";
      }else {
        alert("error");
      }
  }
  handleInputChange(key,e){
    var state = Object.assign({}, this.state.newUser);
    state[key] = e.target.value;
    this.setState({newUser:state});
  }
  render(){
    const btn = {
      background:'#ff9800',
    };
    return(
      <div className="section-main container">
        <div className="row">
          <div className="col-md-offset-4 col-md-4">
            <Panel header="Login">
              <form onSubmit={this.handleSubmitForm}>
                <FormInput placeholder="Email" onChange={(e)=>{this.handleInputChange('email',e)}} />
                <FormInput placeholder="password" type="password" name="password" onChange={(e)=>{this.handleInputChange('password',e)}} />
                <button className="btn btn-submit" style={btn}>Login</button>
              </form>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}
