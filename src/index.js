import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import RouteAuth from './Components/RouteAuth';
import AuthChecker from './Components/AuthChecker';


// pages
import App from './Pages/App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import AdminPanel from './Pages/Auth/AdminPanel';
import Product from './Pages/Product';
import Shop from './Pages/Shop';


/**
* Check Your Login Status by reading cookies
*/
function isLoggedIn() {
  var cookie = AuthChecker.getUserCookie("PassportToken");
  if(cookie==''){
    return false;
  }
  return true;
}



ReactDOM.render(
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register}></Route>
          <Route path="/product/:name/:id" component={Product}></Route>
          <RouteAuth path="/main/admin" redirect="/login" check={isLoggedIn()} component={AdminPanel} />
          <RouteAuth path="/login" redirect="/main/admin" check={!isLoggedIn()} component={Login} />
        </Switch>
      </App>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
