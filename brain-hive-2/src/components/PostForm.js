import React, { Component } from "react"; 

class PostForm extends Component {
    state = {
        posterName: "",
        resourceAuthor: "",
        jobSkillLevel: "",
        cohort: "",
        title: "",
        categories: "",
        summary: "",
        link: "",
        resourceType: "",
        datePublished: null,
        videoLength: "",
        timeToComplete: "",
        raiting: "",
        comments: []
    };
    handleChange = (e) => {
        this.setState({
            ...this.state, 
            [e.target.id]: e.target.value
        });
    };
};
