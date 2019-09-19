import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/Dashboard';
import Checkout from './components/Dashboard/Checkout';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="signup" component={SignUp} initial />
          <Scene key="signin" component={SignIn} />
          <Scene key="dash" component={Dashboard} />
          <Scene key="checkout" component={Checkout} />
        </Scene>
      </Router>
    );
  }
}
