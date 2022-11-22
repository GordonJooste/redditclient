//import './App.css';
import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

export const Article = (props)=>{

    const {title, selftext,isVideo,media,permalink} = props;

    console.log(`Video? ${isVideo}`)
    
    if(isVideo){
        console.log(Object.keys(media.reddit_video));
        return (
            <div className="article_container">
                <h3 className="article_title">{title}</h3>
                <a> {selftext}</a>
                <video width="400" height="600" controls >
                    <source src={media.reddit_video.fallback_url} type="video/mp4"/>
                </video>
            </div>
        );
    }

    return (
        <div className="article_container">
            <h3>{title}</h3>
            <br></br>
            <article> {selftext}</article>
        </div>
    )

}