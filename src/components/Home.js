import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://static.thenounproject.com/png/95203-200.png" style={{width: 60, height: 60}} alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/credits">Credits </Link>
          <Link to="/debits">Debits </Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;