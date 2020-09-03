import React, { Component } from "react";
import axios from "../axios";

import Input from "./Input";
import Button from "./Button";


class Article extends Component {
    constructor(props) {
        super(props);
        this.state={
            title : "",
            content : "",
            tags : "",
            saved: false, 
        };
        this.handleChangeTitle= this.handleChangeTitle.bind(this);
        this.handleChangeContent= this.handleChangeContent.bind(this);
        this.handleChangeTags= this.handleChangeTags.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChangeTitle(e){
        this.setState({
            title : e.currentTarget.value,
        })
    }
    handleChangeContent(e){
        this.setState({
            content : e.currentTarget.value,
        })
    }
    handleChangeTags(e){
        this.setState({
            tags : e.currentTarget.value,
        })
    }

    handleSubmit(e){
        e.preventDefault();

        let { title, content, tags } = this.state;

        axios.post("/articles", {
            title : title,
            content : content,
            tags : tags.split(/\s*,\s*/),
        }).then(()=> {
            this.setState({
                title : "",
                content : "",
                tags : "",
                saved: true,
            })
        });

        setTimeout(()=>this.setState({ saved:false, }), 3000)
        //^calls the function after 3 seconds
    }

    render(){
        let { title, content, tags, saved } = this.state;
        return( 
            <>
                { !saved ? null : <p className="alert alert-success" >Your Article has been saved!</p>  }
                <form>
                    <Input title="Title" handleChange={ this.handleChangeTitle } value={ title } id="title" />
                    <Input title="Article" handleChange={ this.handleChangeContent } value={ content }  id="article"  />
                    <Input title="Tags" handleChange={ this.handleChangeTags } value={ tags } id="tags" />
                    <Button name="Create" handleSubmit={ this.handleSubmit } />
                </form>
            </>
        );
    }
}
export default Article;