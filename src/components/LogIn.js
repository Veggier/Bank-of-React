import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom'

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

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
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Log in</h1>
          <div>
            <label htmlFor="userName">UserName:</label>
            <input className="form-control" type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" name="password" />
          </div>
          <br/>
          <button className="btn btn-lg btn-primary btn-block">Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn