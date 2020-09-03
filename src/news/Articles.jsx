import React, { Component } from "react";
import axios from "../axios";
import Tags from "./Tags";
import Loading from "./Loading";
import { Link } from "react-router-dom"

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded : false, 
            articles : [], 
        };
        // ^loaded = tracks if data has been retuned , as only in .then() is it set to true, which runs after the api response
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

        return( !loaded ? <Loading /> :
            <ul
            className="list-group">
                { articles.map(( article )=> (
                    <li className="list-group-item list-group-item-action" key={ article.id }>
                        <Link to={`/news/${article.id}`} className="float-left text-primary" >
                            { article.title }
                        </Link>
                        <Tags article={ article } />
                    </li>
                )) }
            </ul>
        );
    }
}
export default Articles;