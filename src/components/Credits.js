import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: {
        id: "",
        description: "",
        amount: "",
        date: "",
      },
    };
  }

  handleChange = (e) => {
    const updatedCredit = { ...this.state.credit };
    const inputField = e.target.name;
    const inputValue = e.target.value;

    updatedCredit[inputField] = inputValue;
    if (inputField === "amount") {
      updatedCredit.amount = Number(inputValue);
    }
    this.setState({ credit: updatedCredit });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    this.props.newCredit(this.state.credit);
  };

  render() {
    return (
      <div>
        {/* Header */}
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
        <h1>Credits</h1>

        <AccountBalance accountBalance={this.props.accountBalance} />
        <div>Total for Credit: ${this.props.totalCredit}</div>

        {/* Add new Credit card*/}
        <div className="mt-4 mb-4">
            <h3 className="mb-3">Add a New Credit</h3>
            <form  className="card  border-light mb-3 width mx-auto" onSubmit={this.handleSubmit} >
            <div className="input-group mx-auto">
                <span className="input-group-text">Description:</span>
                    <input type="text" name="description"  placeholder="Enter description"
                    onChange={this.handleChange}
                    value={this.state.credit.description}
                    />
                <span className="input-group-text">Amount:</span>
                    <input type="text" name="amount"  placeholder="Enter amount"
                    onChange={this.handleChange}
                    value={this.state.credit.amount}
                    />
                    <div className="input-group-append">
                     <button className="btn btn-primary " type="submit">Add</button>
                     </div>
                </div>
          </form>
        </div>

        {/* Credits information */}
        <div className="mt-4 mb-3">
          <h3>History</h3>
        </div>
        <div className="row">
          {this.props.credits.map((credit) => {
            let date = new Date(credit.date);
            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={credit.id}>
                <InfoCard
                  description={credit.description}
                  amount={credit.amount}
                  date={date.toLocaleDateString()}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Credits;