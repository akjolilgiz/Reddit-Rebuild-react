import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "moment";

const CreatePost = props => {
  let _title = null;
  let _content = null;
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onPostSubmission({
      userName: "Chan",
      datePosted: new Moment(),
      title: _title.value,
      content: _content.value,
      image: "https://picsum.photos/200/300/?random",
      voteCount: 0
    });
    _title.value = "";
    _content.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <div className="form-group">
          <input
            className="form-control mt-3 mb-3"
            type="text"
            id="location"
            placeholder="Title..."
            ref={input => {
              _title = input;
            }}
          />
          <textarea
            className="form-control mb-3"
            id="post"
            placeholder="Post..."
            ref={textarea => {
              _content = textarea;
            }}
          />
          <button
            className="btn-success btn btn-sm float-right w-100 mb-1"
            type="submit"
          >
            Post!
          </button>
        </div>
      </form>
    </div>
  );
};
CreatePost.propTypes = {
  handleNewPostSubmission: PropTypes.func
};
export default CreatePost;
