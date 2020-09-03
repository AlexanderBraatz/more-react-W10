import React from "react";

const Button = ({ name, handleSubmit}) =>(
    <button 
        onClick={ handleSubmit}
        type="button"
        className="btn btn-primary" >{ name }</button>
        
);


export default Button;