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
            if (post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true; 
            }
            if (post.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true; 
            }
                return false; 
        });

        this.setState({
            query: query, 
            filteredPosts: newPosts
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
           <div>
               <div style={myStyles.searchBar}>
                   <input style={myStyles.input}
                   type="text"
                   placeholder="Search"
                   onChange={this.handleChange}
                   />
               </div>
               <div className="postList">{this.renderPosts()}</div>
           </div>
       );
   };
};

const myStyles = {
    searchBar: {
        flex: 1, 
        flexDirection: 'row', 
        marginLeft: '30%', 
        marginRight: '30%', 
        marginBottom: 10, 
        height: 32
    },
    input: {
        width: '70%', 
        height: 32, 
        fontSize: 20, 
        marginBottom: 4
    }
};

export default PostList; 