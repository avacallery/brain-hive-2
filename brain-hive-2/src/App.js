import React, { Component } from 'react';
import './App.css';

//turn functional component into class-based component 

//App will (inherit...extends) gain all the properties of Component 
//that's how we're going to get props/state/mounting etc 

class App extends Component {
  //now this is an attribute of the App class
  //so no const in front of post
    post = {
    posterName: 'Ava Callery',
    resourceAuthor: 'Paul McCartney',
    jobSkillLevel: 'Junior Developer',
    cohort: '4',
    title: 'How To Write A Song About React: Lesson 1',
    categories: ['Apple', 'react'],
    summary: 'McCartney sure knows how to write a song but I do not think he knows much about react.',
    link: 'www.google.com/search?q=PaulMcCartney',
    resourceType: 'Article',
    datePublihed: '1965-11-20:00:00:00z',
    videolength: null,
    timeToComplete: 10,
    rating: 3,
    comments: [{
        commenter: 'Ava', text: 'Love the Beatles.'
    },
    { commenter: 'Ringo', text: 'This is not the real Paul.'}
    ]
}
  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        <Post post={this.post}/>
      </div>
    );
  }
}

export default App;
