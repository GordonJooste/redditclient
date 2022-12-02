import '../../styles/profile.css';
import React from "react";

export const Comment = (props)=>{

    const {body, author} = props;
    

    return (
        <div className="comment-box">
                <div className='comment-content'>
                <h3 className="article_title">{author}</h3>
                <article className="article_selftext"> {body}</article>
                </div>    
        </div>
    );


}