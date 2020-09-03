import React, { Component } from "react";
import axios from "../axios";

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded : false, // tracks if data has been retuned , as only in .then() is it set to true, which runs after the  api response
            articles : [], //or {}?
        };
    }

    componentDidMount(){ // loads articles from API
        axios.get("/articles").then(({ data })=>{
            this.setState({
                loaded : true,
                articles : data.data, 
            });
        });
    }
    render(){
        let { loaded, articles } = this.state;

        return( !loaded ? <p className="text-primary">Loading...</p> :
            <ul
            className="list-group m-4">
                { articles.map(( article )=> (
                    <li className="list-group-item" key={article.id }>
                        <span className="float-left text-primary" >
                            { article.title }
                        </span>
                        <span className="float-right">
                            { article.tags.map((tag, i)=>(
                                <span key={ i } className="badge badge-primary">
                                    { tag }
                                </span>
                            )) }
                        </span>
                    </li>
                )) }
            </ul>
        );
    }
}
export default Articles;