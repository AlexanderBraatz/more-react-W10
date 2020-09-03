import React from "react";

const Input = ({ value, title, handleChange, id}) =>(
    <div className="form-group">
        <label htmlFor={ id } >{ title }</label>
        <input
            onChange={ handleChange }
            value={ value }
            type="text" 
            className="form-control" 
            id={ id }
            aria-describedby={ title } />
    </div>
);


export default Input;