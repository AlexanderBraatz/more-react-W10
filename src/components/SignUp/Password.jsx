import React from "react";
//props: value->for input to show input, 
//       label-> to personalise the each label
//       handleChange-> to let the Parent,where the state has been lifted, determin how to handle Change in the input field
//       colour-> for setting its border colour
const Password = ({ value, label, handleChange, colour }) => (
    <>
        <label>{ label }</label>
        <input 
            onChange= { handleChange }
            style = {{ borderColor : colour }}
            type= "Password"
            value= {  value }
        />
        
    </>
)

export default Password;