import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import {Books} from './Components/Books';
import {BookDetail} from './Components/Bookdetail';
import {Dashboard} from './Components/Dashboard';
import {ProtectedRoute} from "./hor/ProtectedRoute";
import {fakeAuth} from './fakeAuth';
import {AccessDenied} from "./Components/AccessDenied";

import './Routing.css';

export class App extends Component {
  state = {
    authenticated: false,
  };

  componentDidMount() {
    fakeAuth
      .subscribe(authenticated => this.setState({authenticated}));
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo hide-on-med-and-down"><img alt="" src="/logo_w.svg" width="55"/></a>
              <ul className="right">
                <li><NavLink 
                  to="/"
                  activeStyle={{
                    color: 'red'
                  }}
                >Books</NavLink></li>
                <li><Link to="/books">Manage Books</Link></li>
                <li><Link to="/secret">Top Secret Page</Link></li>
                <li><a onClick={fakeAuth.toggle}>{this.state.authenticated ? 'Log out' : 'Log in'}</a></li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/access-denied" component={AccessDenied}/>
              <Route path="/books" component={Books}/>
              <Route path="/books/:bookId" component={BookDetail}/>
              <ProtectedRoute />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
