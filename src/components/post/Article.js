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
        if(isVideo){
            return (
                <div className="box">
                        <div className='content'>
                        <h3 className="article_title">{title}</h3>
                        
                        
                        <video width="500" height="400" controls >
                            <source src={media.reddit_video.fallback_url} type="video/mp4"/>
                        </video>
                        <a className="article_link" href= {url} >{url}</a>
                        <article className="article_selftext"> {selftext}</article>
                        </div>    
                </div>
            );
        }
    
        if(thumbnail !== 'self' || thumbnail !== 'nsfw'){    
            return (
                <div className="box">
                    <div className='content'>
                        <h3 className="article_title">{title}</h3>
                        <img src={thumbnail}  />
                        <article className="article_selftext" > {selftext}</article>
                        <a className="article_link" href= {url} >{url}</a>
                        </div>
                </div>
            )
        }
    
        return (
            <div className="box">
                <div className='content'>
                    <h3 className="article_title">{title}</h3>
                    <article className="article_selftext"> {selftext}</article>
                    <a className="article_link" href= {url} >{url}</a>
                </div>
            </div>
        )
    
    }
    if(isVideo){
        return (
            <Link to={permalinkFinal} className="box">
                    <div className='content'>
                    <h3 className="article_title">{title}</h3>
                    
                    <article className="article_selftext"> {selftextfin}...</article>
                    <video width="500" height="400" controls >
                        <source src={media.reddit_video.fallback_url} type="video/mp4"/>
                    </video>
                    <a className="article_link" href= {url} >{url}</a>
                    </div>    
            </Link>
        );
    }

    if(thumbnail !== 'self' || thumbnail !== 'nsfw'){    
        return (
            <Link to={permalinkFinal} className="box">
                <div className='content'>
                    <h3 className="article_title">{title}</h3>
                    <img src={thumbnail}  />
                    <article className="article_selftext" > {selftextfin}...</article>
                    <a className="article_link" href= {url} >{url}</a>
                    </div>
            </Link>
        )
    }

    return (
        <Link to={permalinkFinal} className="box">
            <div className='content'>
                <h3 className="article_title">{title}</h3>
                <article className="article_selftext"> {selftextfin}...</article>
                <a className="article_link" href= {url} >{url}</a>
            </div>
        </Link>
    )

}