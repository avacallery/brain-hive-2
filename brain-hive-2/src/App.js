import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import './App.css';
import INITIAL_POSTS from './mock/posts';

class App extends Component {
  state = { 
    posts: [...INITIAL_POSTS], 
  };

  addPost = (postData) => {
    this.setState({
      posts: [...this.state.posts,
      postData]
    });
  };

  render() {
    return (
      //App.js mounts once because of BrowserRouter and Switch
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
