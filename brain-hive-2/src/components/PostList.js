import React, { Component } from 'react'; 
import Post from './Post'; 

class PostList extends Component {
//where are these props coming from and what are they?
    state = {
        query: "", 
        filteredPosts: [...this.props.posts],
    }

   handleChange = (e) => {
       //query the updated text from input
       const query = e.target.value;

        const newPosts = this.props.posts.filter((post) => {
            //why are we using >= 0 what does 0 represent? 
            if (post.title.toLowerCase().indexOf(query.toLowercase()) >= 0) {
                return true; 
            }
            if (post.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true; 
            }
                return false; 
        });

        this.setState({
            query: query, 
            filteredPosts: newPosts; 
        });
   }

   renderPosts = () => {
       const display = this.state.filteredPosts.map((post) => {
           return <Post 
           post={post} 
           key={post.id} 
           handleSelect={this.props.handleSelect} />
       });
       return display; 
   };

   render() {
       return (
           
       )
   }

};

export default PostList; 