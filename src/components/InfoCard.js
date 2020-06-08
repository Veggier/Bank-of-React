import React from "react";

const InfoCard = ({ description, amount, date }) => {
  return (
    <div className="card">
      <div className="card-header">{description}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">${amount.toFixed(2)}</li>
        <li className="list-group-item">{date}</li>
      </ul>
    </div>
  );
};

export default InfoCard;