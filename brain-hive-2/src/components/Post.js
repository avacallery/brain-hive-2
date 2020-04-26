import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; //if the item is clicked, user will be redirected

//the post needs to know it is clicked by keeping track of the state(clicked or unclicked)
//in order to access the state for Redirect, we make Post.js into a stateful component

class Post extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        //we want to send back the id of the post we are on
        this.props.handleSelect(this.props.post.id);
        //after we click the item, we set state to true
        this.setState({clicked: true})
    };

    render() {
        const { post } = this.props;

        return (
            <div
                className={'box'}
                onClick={() => this.handleClick()}>
                {this.state.clicked ? <Redirect to="/post/id"/> : null}
                <div className={'postTitle'}>
                    <h2>{post.title}</h2>
                </div>
                <b>{post.resourceAuthor}</b>
                <p>Poster: {post.posterName}</p>
                {post.videoLength ? (<p>Length: {post.videolength}</p>)
                    : null
                }
                <i>"{post.summary}"</i>
                <p>Comments: {post.comments.length}</p>
            </div>
        )
    }
}

export default Post;