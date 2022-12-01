import '../../styles/profile.css';
import React, {useEffect} from "react";
import { Switch, Routes, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { loadPostsPop ,selectPosts } from "../../components/post/ArticleSlice";
import {Article} from '../../components/post/Article'

export const Front = () => {
    const dispatch = useDispatch();
    const postsObject = useSelector(selectPosts);
    const postsArray = postsObject.posts;
    
    useEffect(() => {
      dispatch(loadPostsPop(dispatch));
    }, []);
    

    return(
        <div className="front-page">
            <ul className="posts-list">
                { 
                  postsArray.map((item) => {
                    let textleft = true;

                    if (textleft){
                      textleft = false;
                      return ( // No longer display image in Article component, alternate image and text here
                        <li key={item.data.id} className='card'> 
                          <img src ={item.data.url} className='content'/>
                          <Article className = 'content' fulltext={false} title ={item.data.title} selftext={item.data.selftext} isVideo={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
                        </li>
                    )
                    }
                    else{
                      textleft = true;
                      return ( // TODO Video
                        <li key={item.data.id} className='card'> 
                          <Article className = 'content' classnamefulltext={false} title ={item.data.title} selftext={item.data.selftext} isVideo={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
                          <img src ={item.data.url} className = 'content'/> 
                        </li>
                    )
                    }

                  })
                }
                
            </ul>

        </div>
    );

}
