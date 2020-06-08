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
        <div className="d-flex form-inline justify-content-between mt-4 mb-4">
          <h1 className="">Credits</h1>
          <Link className="btn btn-dark" to="/">
            Back to Home
          </Link>
        </div>

        <AccountBalance accountBalance={this.props.accountBalance} />
        <div className="mb-4">
          <strong>Total Credit</strong>:{" "}
          <span className="badge badge-pill badge-success">
            ${this.props.totalCredit}
          </span>
        </div>

        {/* Add Credit Listing */}
        <div className="mt-4 mb-4">
          <h3 className="mb-3">Add Credit Listing</h3>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <input
              className="form-control mr-3 mb-2"
              name="description"
              value={this.state.credit.description}
              onChange={this.handleChange}
              placeholder="Enter description"
            />
            <input
              className="form-control mr-3 mb-2"
              name="amount"
              value={this.state.credit.amount}
              onChange={this.handleChange}
              placeholder="Enter amount"
            />
            <button className="btn btn-primary mb-2">Add</button>
          </form>
        </div>

        {/* View Credits */}
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