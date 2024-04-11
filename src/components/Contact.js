import React, { useEffect, useState } from 'react';
import "./Contact.css"
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap  } from '@fortawesome/free-solid-svg-icons';


import './Contact.css'

function Contact()
{
    return (
        <div>
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
            <form action="process.php" method="POST">
            <div className="contact" style={{ marginLeft: '0%', height: '40px' }}><h1>Contact</h1></div>
                <br />
                <div
      className="name"
      style={{width: '20%',height: '40px',float: 'left',marginLeft: '50%'}}>
                  First Name: <br /> <input type="text" id="name" name="name" required /></div>
                  <div className="name" style={{ marginLeft: '80%', height: '40px' }}>
                  Last Name: <br />
                  <input type="text" id="name" name="name" required />
                  </div>
                <div class="get" style={{ marginLeft: '2%', height: '40px' }}>Get in touch with me</div>
                <div
                className="maaile" style={{width: '20%', height: '40px',float: 'left', marginLeft: '50%' }}>
                  E-mail: <br /> <input type="email" id="email"  name="email" required />
                </div>
                <div
                className="gender"style={{ marginLeft: '80%',height: '40px'}}
    >

                  Gender: <br /> <select gender="mygender" id="genderr">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="messageme" style={{ marginLeft: '55%', height: '40px' }}>Message me: <br /> <textarea id="message" rows="8" cols="30" name="message" required></textarea>
                  <br />
                </div>
                <div className="maile" style={{ marginLeft: '1%', height: '20px' }}><h3>E-mail:</h3></div>
                <div className="mail" style={{ marginLeft: '2%', height: '40px' }}>Support@gurukul.ac.in</div>

                <br />
                <div className="subbmit" style={{ marginLeft: '55%', height: '40px' }}>
                  <input type="submit" value="Submit" />
              </div>
                <br />
                <br />
              </form>
            </div>
            
            );
}

export default Contact;
