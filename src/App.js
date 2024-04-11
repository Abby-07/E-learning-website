import './App.css'
//import firebase from './firebase';   
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import Userprofile from "./components/User"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Userprofile" element={<Userprofile/>}/>
          <Route path="/Courses" element={<Courses/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;