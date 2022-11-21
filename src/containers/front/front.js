import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import {Post} from '../../components/post/post';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { loadPosts ,selectPosts, selectFirstPost } from "../../components/post/postSlice";


export const Front = () => {
    const dispatch = useDispatch();
    const postsObject = useSelector(selectPosts);
    const firstPost = useSelector(selectFirstPost);
    const postsArray = postsObject.posts;
    useEffect(() => {
      dispatch(loadPosts(dispatch));
    }, [dispatch]);
    

    return(
        <div className="front-page">
            <h1> Welcome to Simple Reddit</h1>
            <ul className="posts-list">
                <li> 
                  <h2>{postsArray[0].data.author} </h2>
                  <a>{postsArray[0].data.subreddit }</a> <br></br>
                  <a>{postsArray[0].data.num_comments }</a>
                   </li>
                { 
                  // map and prop drill post info post component
                }
                
            </ul>

        </div>
    );

}


/*export default function Topics() {
  const topics = useSelector(topicsSelector); 
  
  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
*/