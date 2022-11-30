import './styles/profile.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect, NavLink, Routes, } from "react-router-dom";
import {Front} from './containers/front/front';
import { Funny } from './containers/front/funny';
import { Eyebleach } from './containers/front/eyebleach';
import {apiCall} from './components/post/Data';
import { loadPosts ,selectPosts } from "./components/post/ArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import ROUTES from './app/routes';
import { Article } from "./components/post/Article";
import {Comments, comments} from './containers/comments/comments'


function App(){

  // app wide state in store

  // component state here
  const [searchQuery, setsearchQuery] = useState([]);
  
  useEffect(() => {
    setsearchQuery((prev) => { 
      return [searchQuery, ...prev]
    });
  }, []);
  
  
  
  return (
    <div className='App'>
      
      <Router>
      <nav className='navbar'>          
        <NavLink to={ROUTES.funnyRoute()} activeclassname="active" className='navlink'>
          Funny
        </NavLink>
        <NavLink to={ROUTES.eyebleachRoute()} activeclassname="active" className='navlink'>
          Eye Bleach
        </NavLink>
        <NavLink to={ROUTES.frontRoute()} activeclassname="active" className='navlink'>
          Front
        </NavLink>
      </nav>
      

      <main className='container'>
        <Routes >
          <Route path="redditclient/" index element={<Front />} />
          <Route path="redditclient/eyebleach" element={<Eyebleach />} />
          <Route path='redditclient/funny' element ={<Funny/>} />
          <Route path="redditclient/eyebleach/:permalink" element={<Comments />}/>
          <Route path="redditclient/funny/:permalink" element={<Comments />}/>
          <Route path="redditclient/:permalink" element={<Comments />}/>
        </Routes>
        
      </main>
      </Router>
      
    </div>
    );
}

export default App;
