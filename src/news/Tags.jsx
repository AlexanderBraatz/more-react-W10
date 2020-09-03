import React from "react";


const Tags = ({ article }) =>(
    <span className="float-right">
        { article.tags.map((tag, i)=>(
            <span key={ i } className="badge badge-primary p-1 ml-1">
                { tag }
            </span>
        )) }
    </span>
)

export default Tags;
