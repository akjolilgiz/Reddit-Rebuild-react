import React from "react";
import { PropTypes } from "prop-types";
import Moment from "moment";

const Post = props => {
  return (
    <div className="card mb-3">
      <div className="row w-100 no-gutters">
        <div className="col-1" style={{ backgroundColor:"#eee", textAlign:"center"}}>
          <i className="fa fa-arrow-up" onClick={props.onUpVote} />
          <p className="mt-3">{props.voteCount}</p>
          <i className="fa fa-arrow-down" onClick={props.onDownVote} />
        </div>
        <div className="col-11">
        <div className="ml-3">
          <p className="card-text text-secondary">
            <i className="fa fa-user-circle"></i>
            {props.userName} posted {displayTimeOpen(props.datePosted)} ago{" "}
          </p>
          <h5 className="card-title">
            <strong>{props.title}</strong>
          </h5>
          <img className="w-90" src={props.image} alt="image"/>
          <p className="card-text">{props.content}</p>
          <button onClick = {props.onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function displayTimeOpen(timeOpened) {
  return timeOpened.from(new Moment(), true);
}
Post.propTypes = {
  userName: PropTypes.string,
  datePosted: PropTypes.instanceOf(Moment),
  title: PropTypes.string,
  content: PropTypes.string,
  voteCount: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onDelete: PropTypes.func
};
export default Post;
