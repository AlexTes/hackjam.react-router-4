import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import {fakeAuth} from '../fakeAuth';
import {TopSecretComponent} from '../Components/TopSecretComponent';

/**
 * This component should return
 * a <Redirect /> if the user isnt authenticated
 *
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
 *
 * (redirecting to /access-denied)
 *
 * or a <Route /> with the component we give it
 *
 * The route your return  should keep its props like path, exact, ..
 */

export class ProtectedRoute extends Component {
  state = {
    authenticated: false,
  };

  componentDidMount() {
    fakeAuth
      .subscribe(authenticated => this.setState({authenticated}));
  }

  render() {
    const {authenticated} = this.state;
    return (
      <Route exact path="/secret" render={() => (
        authenticated ? (
          <TopSecretComponent />
        ) : (
          <Redirect to="/"/>
        )
      )}/>
    )
  }
}
