import React, { useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
function User (){
    const location=useLocation()

    return (
        <div className="User-profile">
        <header class="header">
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

            <h1>Hello {location.state.id} Welcome to E-gurukul</h1>
            <h2>Your-Information</h2>
            <p>Name </p>

        </div>
    )
}

export default User