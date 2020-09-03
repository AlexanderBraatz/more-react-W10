import React, { Component } from "react";
import Password from "./Password";

class SignUp extends Component{
    constructor(props){
        super(props);

        this.state= {
            password : "",
            confirm : "",
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(e){
       let { value } = e.currentTarget;

        this.setState({
            password : value
        })
    }
    handleChange2(e){ //handlesChange
        let { value } = e.currentTarget;
 
         this.setState({
             confirm : value
         })
    }
    warn(){     // interperates the lifted state,decision to warn or not
        let { password, confirm } = this.state ;
        let { minimumLength } = this.props;

        return ( !(password.length > minimumLength && password === confirm) )
    }

    render() {
        let { password, confirm } = this.state ;
        let warning = this.warn();
        return(
            <>
                <Password 
                    handleChange= { this.handleChange1 }
                    colour= {warning ? "red" : ""} //further interperates the lifted state ( could be specialised here e.g not red but orange), choice how to warn (with red), as this is password styling specific it preferably lives in Password
                    label= "Password: "
                    value = { password } // makes input filed work

                />
                <Password 
                    handleChange= { this.handleChange2 }
                    colour= {warning ? "red" : "" }
                    label= "Confirm Password: "
                    value = { confirm }
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