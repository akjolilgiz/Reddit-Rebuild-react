import React from "react";
import Post from "./Post";
import { throws } from "assert";
import Moment from "moment";
import CreatePost from "./CreatePost";
class Posts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          userName: "Chan",
          datePosted: new Moment("2018-11-26"),
          title: "Lorem ipsum",
          image: "https://picsum.photos/500/300/?random",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          voteCount: 3
        },
        {
          userName: "Ethan",
          datePosted: new Moment("2018-11-24"),
          title: "Lorem ipsum",
          image: "https://picsum.photos/500/300/?random",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          voteCount: 21
        }
      ]
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleSortingPosts = this.handleSortingPosts.bind(this);
    this.handleDelte = this.handleDelete.bind(this);
  }
  handleFormSubmission(newPost) {
    var newPosts = this.state.posts.slice();
    newPosts.push(newPost);
    this.setState({ posts: newPosts });
  }
    handleDelete(thisPost){
     var newPosts = this.state.posts.slice();
     var sortedPosts = newPosts.filter(post => post.title !== thisPost.title);
     this.setState({posts: sortedPosts});
    }

  handleUpVote(post) {
    var newPosts = this.state.posts.slice();
    var index = newPosts.indexOf(post);
    newPosts[index].voteCount++;
    this.setState({ posts: newPosts });
  }
  handleDownVote(post) {
    var newPosts = this.state.posts.slice();
    var index = newPosts.indexOf(post);
    newPosts[index].voteCount--;
    this.setState({ posts: newPosts });
  }

  handleSortingPosts(){
    var newPosts = this.state.posts.slice();
    console.log(newPosts);
    console.log(this.state.posts);
    var otherPost = newPosts.slice();
    console.log(otherPost)
    var sortedPosts = otherPost.sort(function(a, b){return b.voteCount - a.voteCount});
    console.log(sortedPosts);
    this.setState({posts: sortedPosts})
}

  render() {
    return (
      <div className="container">
       <button onClick={this.handleSortingPosts}>Sort</button>
        <CreatePost onPostSubmission={this.handleFormSubmission} />


            {this.state.posts.sort(function(a, b){return b.voteCount - a.voteCount}).map((post, index) => (
              <Post
                userName={post.userName}
                datePosted={post.datePosted}
                title={post.title}
                content={post.content}
                voteCount={post.voteCount}
                image ={post.image}
                onUpVote={() => this.handleUpVote(post)}
                onDownVote={() => this.handleDownVote(post)}
                onDelete={() => this.handleDelete(post)}
                key={index}
              />
             
            ))}

      </div>
    );
  }
}

export default Posts;
