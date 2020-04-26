import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact>
            <PostList posts={this.state.posts} 
              onSelect={this.onSelect} />
          </Route>
          <Route path="/add" exact>
            <PostForm addPost={this.addPost} />
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
