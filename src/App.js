import './App.css';
import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import {Post} from './components/post/post';

function App(){

  

  const [searchQuery, setsearchQuery] = useState([]);
  const [PostLink, setPostLink] = useState([]);
  const [PostText, setPostText] = useState([]);
  const [PostPicture, setPostPicture] = useState([]);
  const [CommentsList, setCommentsList] = useState([]);

  const ROUTES = {
    POSTS: "/posts",
  };

  setsearchQuery((prev)=>{ return [searchQuery, ...prev]});

  return (
    <div className='App'>
      <nav>
        <NavLink to={ROUTES.POSTS} activeClassName="active">
          Home
        </NavLink>
        <Search search = {searchQuery}/>
      </nav>
      <main>
        //TODO Posts list
      </main>
    </div>
  );
}

export default App;
