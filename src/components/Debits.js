import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debit: {
        id: "",
        description: "",
        amount: "",
        date: "",
      },
    };
  }

  handleChange = (e) => {
    const updatedDebit = { ...this.state.debit };
    const inputField = e.target.name;
    const inputValue = e.target.value;

    updatedDebit[inputField] = inputValue;
    if (inputField === "amount") {
      updatedDebit.amount = Number(inputValue);
    }
    this.setState({ debit: updatedDebit });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    this.props.newDebit(this.state.debit);
  };

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
        <h1>Debits</h1>

        <AccountBalance accountBalance={this.props.accountBalance} />
        <div>
            Total for Debit: ${this.props.totalDebit}
        </div>

        {/* Add new debit card */}
        <div className="mt-4 mb-4">
            <h3 className="mb-3">Add a New Debit</h3>
            <form  className="card  border-light mb-3 width mx-auto" onSubmit={this.handleSubmit} >
            <div className="input-group mx-auto">
                <span className="input-group-text">Description:</span>
                    <input type="text" name="description"  placeholder="Enter description"
                    onChange={this.handleChange}
                    value={this.state.debit.description}
                    />
                <span className="input-group-text">Amount:</span>
                    <input type="text" name="amount"  placeholder="Enter amount"
                    onChange={this.handleChange}
                    value={this.state.debit.amount}
                    />
                    <div className="input-group-append">
                     <button className="btn btn-primary " type="submit">Add</button>
                     </div>
                </div>
          </form>
        </div>

        {/* Debits information */}
        <div>
          <h3>Cards</h3>
        </div>
        <div className="row row-cols-3">
          {this.props.debits.map((debit) => {
            let date = new Date(debit.date);

            return (
              <div className="col" key={debit.id}>
                <InfoCard
                  description={debit.description}
                  amount={debit.amount}
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

export default Debits;