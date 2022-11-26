import '../../styles/profile.css';
import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink, Link } from "react-router-dom";

export const Article = (props)=>{

    const {title, selftext,isVideo,media,permalink,thumbnail, thumbnail_height,thumbnail_width, url} = props;

    //console.log(`Video? ${isVideo}`)
    let selftextfin = '';
    console.log(selftext.length);
    if(typeof selftext  === 'string'){
        if(selftext.length > 9){
            selftextfin = selftext.substring(0,9);
            console.log(`shortened to ${selftextfin.length}`);
        }
    }
    console.log(selftextfin);
    
    if(isVideo){
        return (
            <div className="article_container">
                {//<Link to={`/comments/:${permalink}`}>
                }
                    <h3 className="article_title">{title}</h3>
                    <a className="article_link" href= {url} >{url}</a>
                    <article className="article_selftext"> {selftextfin}...</article>
                    <video width="400" height="600" controls >
                        <source src={media.reddit_video.fallback_url} type="video/mp4"/>
                    </video>
                    <button className="article_comments">Comments</button>
                {//</Link>
                    }
            </div>
        );
    }

    if(thumbnail != 'self' || thumbnail != 'nsfw'){    
        return (
            <div className="article_container">
                {//<Link to={`/comments/:${permalink}`}>
                }
                    <h3 className="article_title">{title}</h3>
                    <a className="article_link" href= {url} >{url}</a>
                    <article className="article_selftext" ><img src={thumbnail} alt={selftext} width={thumbnail_width} height={thumbnail_height} /> {selftextfin}...</article>
                    <button className="article_comments">Comments</button>
                {//</Link>
                    }
            </div>
        )
    }

    return (
        <div className="article_container">
            {//<Link to={`/comments/:${permalink}`}>
                }
                <h3 className="article_title">{title}</h3>
                <a className="article_link" href= {url} >{url}</a>
                <article className="article_selftext"> {selftextfin}...</article>
                <button className="article_comments">Comments</button>           
            {//</Link>
                }
        </div>
    )

}