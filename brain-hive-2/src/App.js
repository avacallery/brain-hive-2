import React, { Component } from 'react';
import { Browser, Route, Switch } from 'react-router-dom'; 
import Post from './components/Post'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import './App.css';
import posts from './mock/posts';

class App extends Component {
  state = { 
    posts: [...posts], 
  };

  addPost = (postData) => {
    this.setState({
      posts: [...this.state.posts,
      postData]
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome to BrainHive!</h1>
        <PostList posts={this.state.posts} />
        <PostForm addPost={this.addPost} /> 
        </div>
    );
  }
}

export default App;
