//import './App.css';
import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import {Post} from './components/post/post';
import {apiCall} from './Data';

function App(){

  const [searchQuery, setsearchQuery] = useState([]);
  const [PostsArray, setPostsArray] = useState( ); 
  const [CommentsList, setCommentsList] = useState([]);
  let result = 'lol';
  
  useEffect(() => {
    setsearchQuery((prev) => { 
      return [searchQuery, ...prev]
    });
    setPostsArray((prev) => {
      // its not working because I need to use a promise. Get the result from the promise and then set state etc. 
      
      apiCall.fetchPosts('/r/popular').then((data) => {W
        console.log(`useEffect`);
        result = data[4];    
        console.log(result);
        return result;
      });
    })
  }, [0]);
  
  
  return (
    <div className='App'>
      <nav>
        {/*}// TODO Search <div className='Search' searchquery = {searchQuery} />*/}
      </nav>
      <main>
        <ul>
          <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          <li><a>{ //PostsArray[4].data.subreddit
          }</a></li>
          <li><a>4</a></li>
          
        </ul>
        //TODO Posts list
        <div>
          
        </div>
        
      </main>
    </div>
  );
}

export default App;
