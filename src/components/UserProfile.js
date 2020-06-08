import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
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
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">User Profile</h5>
    <h6 className="card-subtitle mb-2 text-muted">Username: {this.props.userName}</h6>
    <p className="card-text">Member Since: {this.props.memberSince}</p>
  </div>
    </div>
    </div>
    );
  }
}

export default UserProfile;