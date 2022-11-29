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
    
    useEffect(() => {
      dispatch(loadComments(dispatch,permalink));
      dispatch(loadCommentPost(dispatch,permalink));
      //console.log(postObject);
    }, [commentsObject, postObject]);
    



    return(
        <div className="comments-page">
            <h1> Welcome to Simple Reddit</h1>
            <Article  fulltext = {true} title ={postObject.title} selftext={postObject.selftext} isVideo={postObject.is_video} media={postObject.media} permalink ={postObject.permalink} thumbnail ={postObject.thumbnail} thumbnail_height ={postObject.thumbnail_height} thumbnail_width = {postObject.thumbnail_width} url ={postObject.url} /> 
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


