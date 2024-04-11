import './style.css';
import triptok from './images/kunal-goswami-5DYuCuFgJBs-unsplash.jpg'
import use1 from './images/user2.jpg'
import use2 from './images/user1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap  } from '@fortawesome/free-solid-svg-icons';
// import dewang from './images/dewang-gupta-EUpkkNip4mE-unsplash.jpg'
import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
// import 'photography-course' from './images/photography-course.png'
import photographyCourseImage from './images/photography-course.png';
import { useState } from "react";


  

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);


    return (
    <div className="homepage">

      {/* Header Section */}
      <header class="header">
      <div class="menu-bar-btn" id='menuBarBtn'>
      <i class="fas fa-star"></i>

      </div>
      <div className="logo">
                <FontAwesomeIcon icon={faGraduationCap }/>
                <span>E-gurukul</span>
            </div>
       <div class="home-tab menu-items" id='menuItems'>
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
        <section class="home">
       
        <h1>The best platfrom <br/> to learn</h1>
        <p>Learn,grow and succedd with our online courses</p>
            <div class="input-group-append">
            <button type="submit" class="input-group-text btn">Explore course</button>
        </div> 
        </section>
     <div>
     <section class="features">
            <h1>Our Courses </h1>
            <div class="container">
                <div class="row">
                    
                       <div class="col-md-4 feature-box">
                        <div class="feature-img">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=' dewang'/>
                            <div class="price">
                            <span><i class="fas fa-rupee-sign"></i>4000</span>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                             </div>
                           </div>
                           <div class="feature-details">
                           <h4>Computer-Science</h4>
                               <p>Programming for everybody. Getting started with Python.</p>
                               <div>
                               <span><i class="fas fa-refresh"></i>Beginar     </span>
                                    <span><i class="fas fa-clock"></i>Time     </span>
                               <span><i class="fas fa-star"></i>4.5(2kreview)</span>
                               </div>
                           </div>
                        </div>
                    
                    
                     <div class="col-md-4 feature-box">
                        <div class="feature-img">
                
                        <img src= {photographyCourseImage} alt='' />
                            <div class="price">
                            <span><i class="fas fa-rupee-sign"></i> 5100</span>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                             </div>
                           </div>
                           <div class="feature-details">
                           <h4>Photography</h4>
                               <p>Photography Master class: A complete guide to Photography. </p>
                               <div>
                               <span><i class="fas fa-refresh"></i>Beginar   </span>
                               <span><i class="fas fa-clock"></i>Time</span>
                               <span><i class="fas fa-star"></i>5.0(1k review)</span>
                               </div>
                           </div>
                        </div>
                    
                    
                    <div class= " col-md-4 feature-box">
                        <div class="feature-img">
                        <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" alt='ec'/>
                            <div class="price">
                            <span><i class="fas fa-rupee-sign"></i> 6000</span>
                            </div>
                            <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                             </div>
                           </div>
                           <div class="feature-details">
                           <h4>Marketing</h4>
                               <p>Project Management principles and Practices.A key to your ultimate management skills. </p>
                               <div>
                               <span><i class="fas fa-refresh"></i>Beginar </span>
                                   <span><i class="fas fa-clock"></i>Time</span>
                               <span><i class="fas fa-star"></i>4.5(1.5kreview)</span>
                               </div>
                           </div>
                        </div>
                    </div>
               
               </div>
    </section>
        {/* <section class="gallery">
        <h1>Travelling Gallery</h1>
            <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="gallery-box">
                <img src="images/raghu-nayyar-EpAq2EE-shg-unsplash.jpg" alt='cd'/>
                    <h4>New Delhi</h4>
                    </div>
                </div>
                 <div class="col-md-3">
                    <div class="gallery-box">
                <img src="images/meric-dagli-ZgbzOZW9U3o-unsplash.jpg" alt='vd'/>
                    <h4>Rajasthan</h4>
                        </div>
                </div> 
                <div class="col-md-3">
                    <div class="gallery-box">
                <img src="images/jack-ward-rknrvCrfS1k-unsplash.jpg" alt='dsdzsc'/>
                        <h4>Italy</h4>
                        </div>
                </div> 
                <div class="col-md-3">
                    <div class="gallery-box">
                <img src="images/ahmed-yaaniu-05A3CzImkhw-unsplash.jpg" alt='sdcs' />
                    <h4>Maldives</h4>
                        </div>
                </div>
                </div>
            </div>
        </section> */}
        <section class="banner">
        <div class="banner-highlights">
            <div class="container">
            <div class="row">
                <div class="col-md-8">
                <h2>Get 20% discount on top-rated courses</h2>
                    <p>Limited time offer only!</p>
                </div>
                <div class="col-md-8">
                <button type="button" class="Booking-btn">Buy Now</button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section class="users-feedback">
        <h1>Users Review</h1>
            <div class="container">
            <div class="row">
                
            
                
                 <div class="col-md-4 user-review">
                 <div class="user-review">
                    <p>Engaging content, practical assignments. Could include more on advanced editing. </p>
                    <h5>Andrew D'Souza</h5>
                    <small>Photography Course</small>
                </div>
                <img src={triptok} alt='dsa' />
                </div>
                
                
                <div class="col-md-4 user-review">
                <div class="user-review">
                    <p>Insightful lectures, outdated content. Needs more interactive elements.</p>
                    <h5>Max Jones</h5>
                    <small>Marketing Course</small>
                </div>
                <img src={use1} alt='dsa' />
                </div>

                <div class="col-md-4 user-review">
                <div class="user-review">
                    <p>Clear explanations, challenging assignments. Few interactive sessions.</p>
                    <h5>Anna Kenric</h5>
                    <small>Computer Science Course</small>
                    </div>
                    <img src={use2} alt='dsa' /> 
                </div>
            </div>
            </div>
        </section>
        {/* <hr class="divider-line"></hr> */}
        <section class="footer">
        <div class="container">
            <div class="row">
            <div class="col-md-3">
                <img src="images/triptok.png" class="footer-logo" alt='dzc'/>
                <p>Book your favourite places from travelocity and experience the joy of travelling around.</p>
                </div>
            <div class="col-md-3">
                <h4>Features</h4>
                <p>Deals & Offers</p>
                <p>Customer Reviews</p>
                <p>Cancellation policy</p>
                </div>
            <div class="col-md-3">
                <h4>Quick Contact</h4>
                <p><i class="fas fa-phone-square"></i> +91 7998257692</p>
                <p><i class="fas fa-envelope"></i> travelocity@gmail.com</p>
                <p><i class="fas fa-home"></i>6th Cross Road, 1st Stage Kumarswamy Layout, Bengaluru, 560078 </p>
                </div>
            <div class="col-md-3">
                 <h4>Follow Us On</h4>
                <p><i class="fab fa-facebook"></i> Facebook</p>
                <p><i class="fab fa-youtube"></i> YouTube</p>
                <p><i class="fab fa-twitter"></i> Twitter</p>
                </div>
            </div><hr />
            <p class="copyright">Made with <i class="fas fa-heart"></i> by E-learning</p>
            </div>
        </section>
          
        <span> &copy;
                    <div class="Elearning"> <h2><a href="./"> E-Learning</a> </h2>
                    </div>
                    </span>
                    

    </div>
    <script src='./trying.js'> </script>
  </div>
    )
}

export default Home