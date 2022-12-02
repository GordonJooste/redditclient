import '../../styles/profile.css';
import React, {useEffect} from "react";
import { Switch, Routes, Redirect, NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectComments, selectPost } from './commentsSlice';
import { apiCall } from '../../components/post/Data';
import { Comment } from './comment';
import { Article } from '../../components/post/Article';

export const loadComments = (dispatch,permalink)=>{
    return async (dispatch) =>{
      const response = await apiCall.fetchComments(permalink);
      const payload = response;
      //console.log('Thunking about Comments');
      //console.log(payload);
      dispatch({type:'comments/changeComments', payload: payload});
    }
  }

export const loadCommentPost = (dispatch,permalink)=>{
    return async (dispatch) =>{
      const response = await apiCall.fetchCommentPost(permalink);
      const payload = response;
      //console.log('Thunking about Comments');
      //console.log(payload);
      dispatch({type:'comments/changePost', payload: payload});
    }
  }
  

export const Comments = () => {
    const dispatch = useDispatch();
    const permalinkHyphenated = useParams();
    
    const permalink = permalinkHyphenated.permalink.replaceAll('-', '/');
    const commentsObject = useSelector(selectComments);
    const postObject = useSelector(selectPost);
    const commentsArray = commentsObject.comments;
    
    const media = (postObject)=>{
      let url = postObject.url;
      const jpg = url.substring(url.length-3);
      if(postObject.is_video){
        return  (
          <figure>
            <video controls className='content'>
            <source src={postObject.media.reddit_video.fallback_url} type="video/mp4"/>
            </video>
          </figure>
        )
      }
      else if(jpg === 'jpg' || jpg === 'png'){
        return ( 
        <figure>
        <img src ={postObject.url} className='content'/></figure>
        )
      }
      else{
        return '';
      }
    }

    useEffect(() => {
      dispatch(loadComments(dispatch,permalink));
      dispatch(loadCommentPost(dispatch,permalink));
      //console.log(postObject);
    }, []);
    
    return(
        <div className="comments-page">
          <div className='card'>
            {media(postObject)}     
            <Article  fulltext = {true} title ={postObject.title} selftext={postObject.selftext} isVideo={postObject.is_video} media={postObject.media} permalink ={postObject.permalink} thumbnail ={postObject.thumbnail} thumbnail_height ={postObject.thumbnail_height} thumbnail_width = {postObject.thumbnail_width} url ={postObject.url} /> 
            </div>
            <ul className="comments-list">
                { 
                  commentsArray.map((item) => {
                    //console.log(item.data);
                    return (
                    <li key={item.data.id} className='comment-card'> 
                      <Comment body={item.data.body} author={item.data.author} /> 
                    </li>
                    )  
                  }) 
                  
                }
                
            </ul>

        </div>
    );

}


