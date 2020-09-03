import React, { Component } from "react";
import axios from "../axios";
import Tags from "./Tags";
import Loading from "./Loading";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded : false, 
            article : [],
        };
    }

    componentDidMount(){ 
        let { id } = this.props; 

        axios.get(`/articles/${id}`).then(({ data })=>{ 
            this.setState({
                loaded : true,
                article : data.data, 
            });
        });
        //^uses :id from match.params in App.js, to get article from api with ajax request
    }
    render(){
        let { loaded, article } = this.state;
        let { title, content, id } = article;

        return( !loaded ? <Loading /> :
            <>
            <article>
                <h2>{ title }</h2>
                <p>{ content }</p>
                <Tags article={ article } /> 
            </article>
            <br></br>
                <Comments articleID={ id } />
                <CreateComment articleID={ id } />
            </>
        );
    }
}
export default Article;