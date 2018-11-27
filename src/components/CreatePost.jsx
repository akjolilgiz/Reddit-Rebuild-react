import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const CreatePost = (props) => {
    let _title = null; 
    let _content= null;
    function handleNewPostSubmission(event) {
        event.preventDefault(); 
        props.onPostSubmission({userName: 'Chan', datePosted: new Moment(), title: _title.value, content: _content.value})
      _title.value= '';
      _content.value='';

    }

    return ( 
        <div>
        <form onSubmit={handleNewPostSubmission}>
          <input
            type='text'
            id='location'
            placeholder='Title...'
            ref={(input) => {_title = input;}}/>
          <textarea
            id='post'
            placeholder='Post...'
            ref={(textarea) => {_content = textarea;}}/>
          <button type='submit'>Post!</button>
        </form>
      </div>
     );
}
 CreatePost.propTypes = {
     handleNewPostSubmission: PropTypes.func,
 }
export default CreatePost;