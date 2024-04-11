import React, { useState } from "react";
import './style.css';
import './login.css'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import user from "./images/login.jpg"
//import firebase from '../firebase'; // Import Firebase configuration

function Signup() {
    const history = useNavigate();
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [college, setCollege] = useState('');
    // const [branch, setBranch] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Perform signup with email and password using your existing logic
            await axios.post("http://localhost:8000/signup", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else if (res.data === "notexist") {
                        history("/", { state: { id: email } });
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

    // const handleGoogleSignup = async () => {
    //     try {
    //         const provider = new firebase.auth.GoogleAuthProvider();
    //         await firebase.auth().signInWithPopup(provider);
    //         history("/home");
    //     } catch (error) {
    //         console.error("Google sign-up error:", error.message);
    //     }
    // };

    return (
        <div className="signup">
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
        <div className="loginbox">
    <img src={user} className="user" alt="skcs" />
    <h1>Signup</h1>
    <form>
        <div className="input-row">
            {/* <input type="name" className="input-box" onChange={(e) => setName(e.target.value)} placeholder="Name" /> */}
            <input type="email" className="input-box" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="input-row">
            <input type="password" className="input-box" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            {/* <input type="age" className="input-box" onChange={(e) => setAge(e.target.value)} placeholder="Age" /> */}
        </div>
        <div className="input-row">
            {/* <input type="college" className="input-box" onChange={(e) => setCollege(e.target.value)} placeholder="College" />
            <input type="branch" className="input-box" onChange={(e) => setBranch(e.target.value)} placeholder="Branch" /> */}
        </div>
        <input type="submit" className="input-box" onClick={handleSignup} />
    </form>
            <br />
            <p>OR</p>
            {/* <br />
            <button onClick={handleGoogleSignup} className="signup">Sign up with Google</button>
            <br />
            <Link to="/" className="signup">Login Page</Link> */}
        </div>
        </div>
    );
}

export default Signup;