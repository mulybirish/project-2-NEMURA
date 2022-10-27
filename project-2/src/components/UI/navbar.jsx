// import { Link } from "react-router-dom";
import React, {useState} from "react";
import { useEffect } from "react";
import "./navbar.css";
import logo from "./nemura-low-resolution-logo-color-on-transparent-background (2).png";




export const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)


  //navbar scroll changeBackground function
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground);
  },[])

  console.log(navbar)
  return (
    
  <div className={ navbar ? "nav-true" : "nav-false"} >
  <nav class="navbar fixed-top navbar-expand-xl navbar-light">
    <img src={logo} alt="Logo"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">TOP CATEGORIES</a>
      <a class="nav-item nav-link" href="#">MY FAVOURITES <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">TOP 20 SERIES</a>
      <a class="nav-item nav-link" href="#">BOTTOM 20 SERIES</a>
    </div>
  </div>
</nav>
  
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>*/}
    </div> 
    );

};