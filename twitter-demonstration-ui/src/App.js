import logo from './logo.svg';
import './App.css';
import React from 'react';
import Twitter from './components/RetrieveTwitter'; 
import CreateTweet from './components/CreateTweet';
import DeleteTweet from './components/DeleteTweet';
import Home from './Home';    
import 'bootstrap/dist/css/bootstrap.min.css';

/* Author: Mounica */
function App() {
  return (
    <React.Fragment>
       <Home></Home>
    </React.Fragment>
  );
}

export default App;
