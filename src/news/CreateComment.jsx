import React, { Component } from "react";
import axios from "../axios";

import Input from "./Input";
import Button from "./Button";


class Article extends Component {
    constructor(props) {
        super(props);
        this.state={
            email : "",
            comment : "",
            saved: false,
        };
        this.handleEmail= this.handleEmail.bind(this);
        this.handleComment= this.handleComment.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleEmail(e){
        this.setState({
            email : e.currentTarget.value,
        })
    }
    handleComment(e){
        this.setState({
            comment : e.currentTarget.value,
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let { articleID } = this.props;
        let { email, comment } = this.state;

        axios.post(`/articles/${articleID}/comments`, {
            email : email,
            comment : comment,
        }).then(()=> {
            this.setState({
                email : "",
                comment : "",
                saved: true,
            })
        });

        setTimeout(()=>this.setState({ saved:false, }), 3000)
    }

    render(){
        let { email, comment, saved } = this.state;
        return( 
            <>
                { !saved ? null : <p className="alert alert-success mt-3 mb-3" >Saved!</p>  }

                <form className="mt-3 mb-3">
                    <Input title="Email" handleChange={ this.handleEmail } value={ email } id="email" />
                    <Input title="Comment" handleChange={ this.handleComment } value={ comment }  id="comment"  />
                    <Button name="Add Comment" handleSubmit={ this.handleSubmit } />
                </form>
            </>
        );
    }
}
export default Article;