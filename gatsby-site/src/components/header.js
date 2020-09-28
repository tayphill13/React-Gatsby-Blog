import React from 'react';
import { Link } from 'gatsby';


function Header() {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    width: '215px',
    padding: '0px'
  }

    return (
      <header fluid style={headerStyle}>
        <h1>- BLOG SITE -</h1>
      </header>
    );
  }

  export default Header;