import React, { Component } from "react";
import Square from "./Square";

class Squares extends  Component {
    constructor(props){
        super(props)

        this.state={
            selected : 1,
        }
    }

    handleChange( value ){
        this.setState({
            selected : value,
        })
    }

    render() {
        let { selected } = this.state;
        let { colour } = this.props;

        return(
            <>
            <Square 
                colour= { colour }
                handleChange={ () => this.handleChange( 1 ) }
                selected={ selected === 1 }
            />
            <Square 
                colour= { colour }
                handleChange={ () => this.handleChange( 2 ) }
                selected={ selected === 2 }
            />
            </>
        )
    }
}

export default Squares;