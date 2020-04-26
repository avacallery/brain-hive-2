import React, {Component} from 'react'; 
import { useParams } from 'react-router-dom';

class ViewPost extends Component { 
    state = {
    }; 
    //how do we bring in props? 
    render() {
    // useParams();
    const { post } = this.props;

    return(
    <div className="post" style={myPostStyle.post}>
    <h3>{this.props.title}</h3>
    <h2>Author: {this.props.resourceAuthor}</h2>
    </div>
    );
}
}

const myPostStyle = {
    post: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }
}

export default ViewPost; 