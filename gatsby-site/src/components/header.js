import React from 'react';
import { Link } from 'gatsby';

export default function Header(){
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
        </ul>
        </nav>
    </header>

  );
}