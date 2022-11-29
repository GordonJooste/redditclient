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
    
    useEffect(() => {
      dispatch(loadPostsFun(dispatch));
    }, [dispatch]);
    

    return(
        <div className="front-page">
            <h1> Welcome to /r/FUNNY</h1>
            <ul className="posts-list">
                { 
                  postsArray.map((item) => {
                    //console.log(item.data);
                    return (
                    <li key={item.data.id} className='card'> 
                      <Article fulltext={false} title ={item.data.title} selftext={item.data.selftext} isVideo={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} thumbnail ={item.data.thumbnail} thumbnail_height ={item.data.thumbnail_height} thumbnail_width = {item.data.thumbnail_width} url ={item.data.url} /> 
                    </li>
                    )  
                  })
                }
                
            </ul>

        </div>
    );

}
