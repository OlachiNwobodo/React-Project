import React from "react";
import '../styles/homepage.css';
// import image from '../assets/hero.jpg';
const Homepage =()=>{
    return(
        <>
        <div className="hero"></div>
        {/* <img src ={image} alt=""/> */}
        <div className="cards-container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
        </div>
        <footer className="footer">
             <p>&copy; 2025 My Website | All Rights Reserved</p>
        </footer>
        </>
    )
}
export default Homepage