//import './App.css';
import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

export const Article = (props)=>{

    const {title, selftext,isVideo,media,permalink,thumbnail, thumbnail_height,thumbnail_width} = props;

    console.log(`Video? ${isVideo}`)
    
    if(isVideo){
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

    if(thumbnail != 'self' || thumbnail != 'nsfw'){    
        return (
            <div className="article_container">
                <h3>{title}</h3>
                <br></br>
                <article><img src={thumbnail} alt={selftext} width={thumbnail_width} height={thumbnail_height} /> {selftext}</article>
            </div>
        )
    }

    return (
        <div className="article_container">
            <h3>{title}</h3>
            <br></br>
            <article> {selftext}</article>
        </div>
    )

}