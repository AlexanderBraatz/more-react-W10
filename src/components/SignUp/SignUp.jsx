import React, { Component } from "react";
import Password from "./Password";

class SignUp extends Component{
    constructor(props){
        super(props);

        this.state= {
            value1 : "",
            value2 : "",
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(e){
       let { value } = e.currentTarget;

        this.setState({
            value1 : value
        })
    }
    handleChange2(e){ //handlesChange
        let { value } = e.currentTarget;
 
         this.setState({
             value2 : value
         })
    }
    warn(){     // interperates the lifted state,decision to warn or not
        let { value1, value2 } = this.state ;
        let { minimumLength } = this.props;

        return ( !(value1.length > minimumLength && value1 === value2) )
    }

    render() {
        let { value1, value2 } = this.state ;
        let warning = this.warn();
        return(
            <>
                <Password 
                    handleChange= { this.handleChange1 }
                    colour= {warning ? "red" : ""} //further interperates the lifted state ( could be specialised here e.g not red but orange), choice how to warn (with red)
                    label= "Password: "
                    value = { value1 } // makes input filed work

                />
                <Password 
                    handleChange= { this.handleChange2 }
                    colour= {warning ? "red" : "" }
                    label= "Confirm Password: "
                    value = { value2 }
                />
                {warning ? 
                <p className="lead ">
                    *at least { this.props.minimumLength.toString() } characters long.
                </p> : null }
            </>
        )
    }
}
export default SignUp;