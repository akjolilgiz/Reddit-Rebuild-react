import React from "react";

const Channel = props => {
  return (
    <div className="w-100">
      <div className="card mb-3">
        <div className="ml-3">
          <p className="card-text text-secondary">
          </p>
          <h5 className="card-title">
            <strong>Channel</strong>
          </h5>
          <img className="w-90" src={props.image} alt="image" />
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Channel;
