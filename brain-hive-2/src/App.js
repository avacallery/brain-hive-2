import React, { Component } from 'react';
import Post from './components/Post'
import './App.css';
import posts from './mock/posts';

//turn functional component into class-based component 

//App will (inherit...extends) gain all the properties of Component 
//that's how we're going to get props/state/mounting etc 

class App extends Component {
  //separation of concern and readability
  //each function or method should do one task

  renderPosts = () => {
    //theres a lot of tools we can use to loop through our array of posts (.map, .filter, .forEach, or For Loop)
    //.map iterates through an existing array and creates an entirely new array 
    //.map does not have to replicate the original length
    //.map whatever you return in that array is what fills the new array
    //.map you're reMAPPING the array

    //this function on line 23 is the same as the nameless function below on line 28)
    // const mapFunction = (post) => {
    //   return <Post post={post} />;
    // }
    // const display = posts.map(mapFunction); 

    //nameless function because we only use it once
    const display = posts.map(post => {
      //importing prop from Post component and reassigning
      return <Post post={post} />
    })
    return display;
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        <div className="postList">{this.renderPosts()}</div>
        </div>
    );
  }
}

export default App;
