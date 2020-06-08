import React from "react";

const InfoCard = ({ description, amount, date }) => {
  return (
    <div className="card bg-light mb-3 width mx-auto">
      <div className="card-header">{description}</div>
      <div className="card-body">
    <h5 className="card-title">Amount: ${amount.toFixed(2)}</h5>
    <p className="card-text">Date: {date}</p>
      </div>
    </div>
  );
};

export default InfoCard;