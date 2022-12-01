import '../../styles/profile.css';
import React, {useEffect} from "react";
import { Switch, Routes, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { loadPostsFun ,selectPosts } from "../../components/post/ArticleSlice";
import {Article} from '../../components/post/Article'

export const Funny = () => {
    const dispatch = useDispatch();
    const postsObject = useSelector(selectPosts);
    const postsArray = postsObject.posts;
    let textleft = true;
    
    useEffect(() => {
      dispatch(loadPostsFun(dispatch));
    }, []);
    
    const imgLeft =(item)=> {
      return ( // No longer display image in Article component, alternate image and text here
      <li key={item.data.id} className='card'> 
        <img src ={item.data.url} className='content'/>
        <Article className = 'content' fulltext={false} title ={item.data.title} selftext={item.data.selftext} is_video={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
      </li>
  )
    }

    const imgRight =(item)=>{
      return ( // TODO Video
      <li key={item.data.id} className='card'> 
        <Article className = 'content' classnamefulltext={false} title ={item.data.title} selftext={item.data.selftext} is_video={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
        <img src ={item.data.url} className = 'content'/> 
      </li>
  )
    }

    const vidLeft =(item)=> {
      return ( // No longer display image in Article component, alternate image and text here
                          <li key={item.data.id} className='card'> 
                            <video controls className='content'>
                            <source src={item.data.media.reddit_video.fallback_url} type="video/mp4"/>
                            </video>
                            <Article className = 'content' fulltext={false} title ={item.data.title} selftext={item.data.selftext} is_video={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
                          </li>
                      )
    }

    const vidRight =(item) =>{
      return ( // TODO Video
      <li key={item.data.id} className='card'> 
        <Article className = 'content' classnamefulltext={false} title ={item.data.title} selftext={item.data.selftext} is_video={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
        <video controls className='content'>
        <source src={item.data.media.reddit_video.fallback_url} type="video/mp4"/>
        </video>
      </li>
  )
    }
    const noMedia = (item) =>{
      return ( // No longer display image in Article component, alternate image and text here
      <li key={item.data.id} className='full-card'> 
        <Article className = 'idk' fulltext={false} title ={item.data.title} selftext={item.data.selftext} is_video={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
      </li>
    )
    }


    return(
        <div className="front-page">
            <ul className="posts-list">
                { 
                  postsArray.map((item) => {
                    let url = item.data.url;
                    const jpg = url.substring(url.length-3);
                    let final = '';
                    if((jpg !== 'jpg' || jpg !== 'png') && item.data.is_video===false){
                      final = noMedia(item);
                    }
                    if((jpg !== 'jpg' || jpg !== 'png') && item.data.is_video){
                      if (textleft){
                        textleft = false;
                        final = vidLeft(item);
                      }
                      else{
                        textleft = true;
                        final = vidRight(item);
                      }  
                    }
                    else if ((jpg === 'jpg' || jpg === 'png') && item.data.is_video===false){
                      if (textleft){
                        textleft = false;
                        final = imgLeft(item);
                      }
                      else{
                        textleft = true;
                        final = imgRight(item);
                      }
                    }
                    return final;
                  })
                }
                
            </ul>

        </div>
    );

}
