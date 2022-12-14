import '../../styles/profile.css';
import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink, Link, Router } from "react-router-dom";

export const Article = (props)=>{

    const {fulltext, title, selftext,isVideo,media,permalink,thumbnail, thumbnail_height,thumbnail_width, url} = props;
    const permalinkFinal = permalink.replaceAll('/', '-');
    let selftextfin = '';
    if(typeof selftext  === 'string'){
        if(selftext.length > 9){
            selftextfin = selftext.substring(0,120);
        }
    }
    if(fulltext){
    
        if(thumbnail !== 'self' || thumbnail !== 'nsfw'){    
            return (
                <div className="box">
                    <div className='article'>
                        <h3 className="article_title">{title}</h3>

                        <article className="article_selftext" > {selftext}</article>
                        <a className="article_link" href= {url} >LINK</a>
                        </div>
                        
                </div>
            )
        }
    
        return (
            <div className="box">
                <div className='article'>
                    <h3 className="article_title">{title}</h3>
                    <article className="article_selftext"> {selftext}</article>
                    <a className="article_link" href= {url} >LINK</a>
                </div>
            </div>
        )
    
    }

    if(thumbnail !== 'self' || thumbnail !== 'nsfw'){    
        return (
            <Link to={permalinkFinal} className="box">
                <div className='article'>
                    <h3 className="article_title">{title}</h3>
                    
                    <article className="article_selftext" > {selftextfin}...</article>
                    <a className="article_link" href= {url} >Comments</a>
                    </div>
                    
            </Link>
        )
    }

    return (
        <Link to={permalinkFinal} className="box">
            <div className='article'>
                <h3 className="article_title">{title}</h3>
                <article className="article_selftext"> {selftextfin}...</article>
                <a className="article_link" href= {url} >Comments</a>
            </div>
            
        </Link>
    )

}