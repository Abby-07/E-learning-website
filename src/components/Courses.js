// CourseManagement.js

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
import './Courses.css'; // Import CSS file for styling

function CourseManagement() {
  return (
    <div class="courses">
    <header class="header">
    <div className="logo">
                <FontAwesomeIcon icon={faGraduationCap }/>
                <span>E-gurukul</span>
            </div>
      <div class="logo-container">
            {/* <img src={faCoffee} alt='Background' class="logo"/> */}
       </div>
       <div class="home-tab">
        <a href="/" class="Home-btn">Home</a>
        <a href="/About" class="About-btn">About</a>
        <a href="/Courses" class="Courses-btn">Courses</a>
        <a href="/Contact" class="Contacts-btn">Contacts</a> 
        </div>
            <div class="login-signup">
                     <a href="/login" class="login-btn">Login</a>
                     <a href="/signup" class="signup-btn">Signup</a>
        </div>
        
        </header>
      <h1>Welcome to Course Management</h1>
      <p>This is a collaborative learning platform where you can manage your courses.</p>
      <div className="course-list">
        <div className="course">
          <p1 className="course-name">Mathematics</p1>
        </div>
        <div className="course">
          <p1 className="course-name">Physics</p1>
        </div>
        <div className="course">
          <p1 className="course-name">Chemistry</p1>
        </div>
        <div className="course">
          <p1 className="course-name">Biology</p1>
        </div>
      </div>
    </div>
  );
}

export default CourseManagement;