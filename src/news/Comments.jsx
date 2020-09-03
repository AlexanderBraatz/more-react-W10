import React, { Component } from "react";
import axios from "../axios";
import Loading from "./Loading";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded : false, 
            comments : [],
        };
    }

    componentDidMount(){ 
        let { articleID } = this.props; 

        axios.get(`/articles/${articleID}/comments`).then(({ data })=>{ 
            this.setState({
                loaded : true,
                comments : data.data, 
            });
        });
    }

    render(){
        let { loaded, comments } = this.state;

        return( !loaded ? <Loading /> :
            <section>
                <h3>Comments</h3>
                {comments.length === 0 ? <p>No comments to show.</p> : (
                    <ul className="list-group">
                        {comments.map(( comment )=>(
                            <li className="list-group-item p-2" key={ comment.id }>
                                <h5 className="m-1">{ comment.email }</h5>
                                <p className="m-1">{ comment.comment }</p>  
                            </li>
                        
                        ))}
                    </ul>
                )}
            </section>
        );
    }
}
//^comments.length... displays "No com.." if the api returns an empty array , so if there are no comments in the data base
export default Comments;