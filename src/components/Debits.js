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
        {/* Header */}
        <div className="d-flex form-inline justify-content-between mt-4 mb-4">
          <h1 className="">Debits</h1>
          <Link className="btn btn-dark" to="/">
            Back to Home
          </Link>
        </div>

        <AccountBalance accountBalance={this.props.accountBalance} />
        <div className="mb-4">
          <strong>Total Debit </strong>:{" "}
          <span className="badge badge-pill badge-danger">
            ${this.props.totalDebit}
          </span>
        </div>

        {/* Add Debit Listing */}
        <div className="mt-4 mb-4">
          <h3 className="mb-3">Add Debit Listing</h3>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <input
              className="form-control mr-3 mb-2"
              name="description"
              value={this.state.debit.description}
              onChange={this.handleChange}
              placeholder="Enter description"
            />
            <input
              className="form-control mr-3 mb-2"
              name="amount"
              value={this.state.debit.amount}
              onChange={this.handleChange}
              placeholder="Enter amount"
            />
            <button className="btn btn-primary mb-2">Add</button>
          </form>
        </div>

        {/* View Debits */}
        <div className="mt-4 mb-3">
          <h3>History</h3>
        </div>
        <div className="row">
          {this.props.debits.map((debit) => {
            let date = new Date(debit.date);

            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={debit.id}>
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