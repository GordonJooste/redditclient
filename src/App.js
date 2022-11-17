//import './App.css';
import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
//import {Post} from './components/post/post';
import {data} from './Data';

function App(){

  const jsonData = data;

  const [searchQuery, setsearchQuery] = useState([]);
  const [PostLink, setPostLink] = useState([]);
  const [PostText, setPostText] = useState([]);
  const [PostPicture, setPostPicture] = useState([]);
  const [CommentsList, setCommentsList] = useState([]);

  
  useEffect(() => {
    setsearchQuery((prev) => { 
      return [searchQuery, ...prev]
    });
  }, []);
  
  return (
    <div className='App' jsonData = {jsonData.data}>
      <nav>
        
        <div className='Search' searchquery = {searchQuery} />
      </nav>
      <main>
        <ul>
          <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
        </ul>
        //TODO Posts list
      </main>
    </div>
  );
}

export default App;
