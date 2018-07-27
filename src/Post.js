import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="post-remove" onClick={() => {this.props.removePost(this.props.id)}}>X</div>
        <div className="post-title">{this.props.title}</div>
        <div className="post-content">{this.props.content}</div>
      </div>
    )}
}

export default Post;
