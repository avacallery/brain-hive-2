import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';

class ViewPost extends Component {
    state = {
        showComments: false
    }

    clickHandler = () => {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    renderComments = (post) => {
        return post.comments.map((comment) => {
            return (
                <div key={comment.commenter} className="box">
                    <p>{comment.commenter}</p>
                    <p>{comment.text}</p>
                </div>
            );
        });
    };

    renderRating = (post) => {
        const rating = post.rating;
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "*";
        }
        return stars;
    };

    renderVideo = (post) => {
        if (post.link.indexOf("youtube") >= 0) {
            const videoIdIndex = post.link.indexOf("?v=");
            const videoId = post.link.substring(videoIdIndex + 3);
            console.log(videoId); 
            return (
                <iframe
                    title="video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                    </iframe>
            );
        }
    };

    render() {
        const { post } = this.props;
        return (
            <div className="selectedPost" style={myStyles.box}>
                <h1>{post.title}</h1>
                <h2>{post.resourceAuthor}</h2>
                <h4>Submitted by: {post.posterName}, Cohort: {post.cohort}</h4>
                <h4>Rating: {this.renderRating(post)}</h4>
                <i>"{post.summary}"</i>
                <p>Time to complete: {post.timeToComplete} minutes</p>
                <a href={`http://${post.link}`}>Click to view article.</a>
                {this.renderVideo(post)}
                <br>
                </br>
                <Button onClick={this.clickHandler}>
                    {this.state.showComments ? "Hide Comments" : "Show Comments"}
                </Button>
                <center>
                    {this.state.showComments ? this.renderComments(post) : null}
                </center>
            </div>
        )
    };
    //.map you will use to display comments
};

const myStyles = {
    box: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F7F7F7",
        border: 1,
        borderBottomWidth: 0,
        paddingBottom: 10,
        marginBottom: 10,
    }
}

export default withRouter(ViewPost); 