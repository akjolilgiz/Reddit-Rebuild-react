import React from 'react';
import Post from './Post'; 
import { throws } from 'assert';
import Moment from 'moment';
import CreatePost from './CreatePost'
class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts: [
        {userName: 'Chan',
          datePosted: new Moment("2018-11-26"),
          title: 'I suck', 
          content: 'I suck at everything',
          upVote: 0,
          downVote: 0,
        }
      ]
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }
  handleFormSubmission(newPost){
      var newPosts = this.state.posts.slice();
       newPosts.push(newPost); 
       this.setState({posts: newPosts})
  }
  render() { 
      let bodyStyle = {
          textAlign: 'center',
      }
    return ( 
      <div style={bodyStyle}>
      <CreatePost onPostSubmission={this.handleFormSubmission}/>
        {this.state.posts.map((post, index)=>
          <Post userName={post.userName}
            datePosted={post.datePosted}
            title={post.title}
            content={post.content}
            upVote={post.upVote}
            downVote={post.downVote}
            key={index}
          />
        )}
          
      </div>

    );
  }
}
 
export default Posts;