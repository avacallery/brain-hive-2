import React from 'react';

//no render method in a functional component

const Post = ({post, handleSelect}) => {

    const handleClick = () => {
        //we want to send back the id of the post we are on
        handleSelect(post.id);
    }

    return (
        <div className={'box'} onClick={() => handleClick()}>
            <div className={'postTitle'}>
            <h2>{post.title}</h2>
            </div>
            <b>{post.resourceAuthor}</b>
            <p>Poster: {post.posterName}</p>
            {   post.videoLength ? (<p>Length: {post.videolength}</p>) 
                : null
            }
            <i>"{post.summary}"</i>
            <p>Comments: {post.comments.length}</p>
        </div>
    )
}

export default Post;