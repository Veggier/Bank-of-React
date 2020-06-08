import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">  Home</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link className="av-item nav-link" to="/userProfile">User Profile</Link>
        <Link className="av-item nav-link" to="/login">Login</Link>
        <Link className="av-item nav-link" to="/credits">Credits </Link>
        <Link className="av-item nav-link" to="/debits">Debits </Link>
        </div>
        </div>
        </nav>
          <img src="https://static.thenounproject.com/png/95203-200.png" style={{width: 60, height: 60}} alt="bank"/>
          <h1>Bank of React</h1>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;