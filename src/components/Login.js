import React, { useState } from "react";
import './style.css';
import './login.css'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'
import user from "./images/login.jpg"
// import back from 
//import firebase from '../firebase'; // Import Firebase configuration

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Perform login with email and password using your existing logic
            await axios.post("http://localhost:8000/", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        history("/Userprofile", { state: { id: email } });
                    } else if (res.data === "notexist") {
                        alert("User has not signed up");
                    }
                })
                .catch(e => {
                    alert("Wrong details");
                    console.error(e);
                });
        } catch (error) {
            console.error(error);
        }
    };

    // const handleGoogleLogin = async () => {
    //     try {
    //         const provider = new firebase.auth.GoogleAuthProvider();
    //         await firebase.auth().signInWithPopup(provider);
    //         history("/home");
    //     } catch (error) {
    //         console.error("Google sign-in error:", error.message);
    //     }
    // };

    return (
        // header section
        
        <div className="loginn">
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
        <div className="loginbox">
        <img src={user} class="user" alt="skcs" />
            <h1>Login</h1>
            <form>
                <br /><input type="email" className="input-box" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <br /><input type="password" className="input-box" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br /><input type="submit" onClick={handleLogin} />
            </form>
            <br />
            <p>OR</p>
             {/* <br />
            <button onClick={handleGoogleLogin} className="signup">Sign in with Google</button>
            <br /> */}
        
            <a href="/signup" class="signupbox2">Signup</a>


        </div>
        </div>
    );
}

export default Login;