import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div id="header">

      <div className="logo-menu">

        <div className="logo">

          <a href="#">GPT-4</a>

        </div>

        <div className="menu">

          <nav>

            <a href="#home">Home</a>

            <a href="#whatisgpt">What is GPT?</a>

            <a href="#features">Features</a>

            <a href="#blog">Blog</a>

          </nav>

        </div>

      </div>

      <div className="sign">

        <a href="#" className="signin">Sign in</a>

        <a href="#" className="signup">Sign up</a>

      </div>

    </div>
  )
}

export default Header;