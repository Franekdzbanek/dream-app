import React, { Component } from 'react';
import firebase from './config/fire';
import './Posts.css';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = { content: '', title: '', posts: [] };
  }

  componentDidMount() {
    var postsRef = firebase.database().ref('posts');
    postsRef.on('value', (snapshot) => {
      const response = snapshot.val();
      let posts = [];
      
      for(let postId in response) {
        posts.push({id: postId, ...response[postId]});
      }
      this.setState({posts});
    });
  }

  handlePostTitleChange(e) {
    this.setState({ title: e.target.value});
  }

  handlePostContentChange(e) {
    this.setState({ content: e.target.value});
  }

  addPost() {
    var newPostKey = firebase.database().ref().child('posts').push().key;

    firebase.database().ref('posts/' + newPostKey).set({
      title: this.state.title,
      content: this.state.content
    });
  }

  removePost(id) {
  }

  render() {
    return (
      <div className="posts">
        <div className="post-list">
          {this.state.posts.map((post) => {
            return (<div key={post.id} className="post">
              <div className="post-remove" onClick={this.removePost(post.id)}>X</div>
              <div className="post-title">{post.title}</div>
              <div className="post-content">{post.content}</div>
            </div>)
          })}
        </div>
        <div className="post-create">
          Title: <input value={this.state.title} onChange={this.handlePostTitleChange.bind(this)}></input>
          <br/>
          Content: <textarea value={this.state.post} onChange={this.handlePostContentChange.bind(this)}></textarea>
          <button onClick={this.addPost.bind(this)}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Posts;
