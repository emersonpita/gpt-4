import React, { useRef, useEffect } from 'react';
import './header.css';

const Header = () => {
const checkboxRef = useRef(null);
const navLinksRef = useRef(null);

useEffect(() => {
const navLinks = navLinksRef.current.querySelectorAll(".nav-mobile a");
navLinks.forEach((link) => {
link.addEventListener("click", () => {
if (checkboxRef.current) {
checkboxRef.current.checked = false;
}
});
});
}, []);

return (
<div id="header">

  <div className="header-container">

    <div className="logo-menu">

      <div className="logo">

        <a href="#">GPT-4</a>

      </div>

      <div className="menu">

        <nav className="nav-desktop">

          <a href="#home" className="menu-item active">Home</a>

          <a href="#whatisgpt" className="menu-item">What is GPT?</a>

          <a href="#features" className="menu-item">Features</a>

          <a href="#blog" className="menu-item">Blog</a>

        </nav>

      </div>

    </div>

    <div className="sign">

      <a href="#" className="signin">Sign in</a>

      <a href="#" className="signup">Sign up</a>

    </div>

    <input type="checkbox" id="hamburguer-menu" ref={checkboxRef} />

    <label htmlFor="hamburguer-menu">

    <div className="mobile-menu">

      <span className="hamburguer1"></span>

      <span className="hamburguer2"></span>

      <span className="hamburguer3"></span>

    </div>

    </label>

    <div className="overlay" ref={navLinksRef}>

      <nav className="nav-mobile">

        <a href="#home" className="menu-item active">Home</a>

        <a href="#whatisgpt" className="menu-item">What is GPT?</a>

        <a href="#features" className="menu-item">Features</a>

        <a href="#blog" className="menu-item">Blog</a>

      </nav>

    </div>

  </div>

</div>

);
};

export default Header;