import './styles/profile.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect, NavLink, Routes, } from "react-router-dom";
import {Front} from './containers/front/front';
import {apiCall} from './components/post/Data';
import { loadPosts ,selectPosts } from "./components/post/ArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import ROUTES from './app/routes';
import { Article } from "./components/post/Article";
import {comments} from './containers/comments/comments'

function App(){

  // app wide state in store

  // component state here
  const [searchQuery, setsearchQuery] = useState([]);
  
  useEffect(() => {
    setsearchQuery((prev) => { 
      return [searchQuery, ...prev]
    });
  }, [0]);
  
  
  
  return (
    <div className='App'>
      <body>
      <Router>
      <nav className='navbar'>          
        <NavLink to={ROUTES.frontPageRoute()} activeclassname="active" className='navlink'>
          Front Page
        </NavLink>
        <NavLink to={ROUTES.eyebleachRoute()} activeclassname="active" className='navlink'>
          Eye Bleach
        </NavLink>
      </nav>
      </Router>

      <main className='container'>
        <Front />
      </main>
      </body>
    </div>
    );
}

export default App;
