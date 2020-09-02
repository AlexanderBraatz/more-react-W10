import React from "react";

const Square = ({ handleChange, selected ,colour}) => (
    <div
        style={{
            height: 200,
            width : 200,
            backgroundColor : selected ? colour: "green" ,
        }}
        onClick={ handleChange }
    />

)


export default Square;