import React from "react";
import Posts from "./Posts";
import RightBar from "./RightBar";

const Body = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-7">
          <Posts />
        </div>
        <div className="col-md-3">
          <RightBar/>
        </div>
      </div>
    </div>
  );
};

export default Body;
