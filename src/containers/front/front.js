import React, {useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { loadPosts ,selectPosts } from "../../components/post/ArticleSlice";
import {Article} from '../../components/post/Article'

export const Front = () => {
    const dispatch = useDispatch();
    const postsObject = useSelector(selectPosts);
    const postsArray = postsObject.posts;
    useEffect(() => {
      dispatch(loadPosts(dispatch));
    }, [dispatch]);
    

    return(
        <div className="front-page">
            <h1> Welcome to Simple Reddit</h1>
            <ul className="posts-list">
                { 
                  postsArray.map((item) => {
                    return (<li key={item.data.id}> <Article  title ={item.data.title} selftext={item.data.selftext} isVideo={item.data.is_video} media={item.data.media} permalink ={item.data.permalink} /> </li>)
                  })
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