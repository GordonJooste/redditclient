//import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router,Switch, Route, Redirect, NavLink, } from "react-router-dom";
import {Front} from './containers/front/front';
import {apiCall} from './components/post/Data';
import ROUTES from './app/routes';

function App(){

  // app wide state in store

  // component state here
  const [searchQuery, setsearchQuery] = useState([]);
  
  useEffect(() => {
    setsearchQuery((prev) => { 
      return [searchQuery, ...prev]
    });

    /*setPostsArray((prev) => {
      // its not working because I need to use a promise. Get the result from the promise and then set state etc. 
      
      apiCall.fetchPosts('/r/popular').then((data) => {
        console.log(`useEffect`);
        result = data[4];    
        console.log(result);
        return result;
      }
    })*/
  }, [0]);
  
  
  
  return (
    <div className='App'>
      <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.frontPageRoute()} activeclassname="active">
              Front Page
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.eyebleachRoute()} activeclassname="active">
              Eye Bleach
            </NavLink>
          </li>
        </ul>
      </nav>
      </Router>
      <main>
      <Front />
      </main>
      
    </div>
  );
}

export default App;
