import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'moment';

const Post = (props) => {
  return (
    <div>
      <h3>{props.userName}</h3>
      <h4>{displayTimeOpen(props.datePosted)}</h4>
      <h3>{props.title}</h3>
      <h1>{props.content}</h1>
      <h5>{props.upVote}</h5>
      <h5>{props.downVote}</h5>

    </div>
  );
}

function displayTimeOpen(timeOpened) {
    return timeOpened.from(new Moment(), true);
  }
Post.propTypes={
  userName: PropTypes.string,
  datePosted: PropTypes.instanceOf(Moment), 
  title: PropTypes.string, 
  content: PropTypes.string,
  upVote: PropTypes.number, 
  downVote: PropTypes.number
};
export default Post;