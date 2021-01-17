import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="bounds">
          <Link to='/' className="header--logo">The Kindness Journal</Link>
        </div>
        <Link to='/login' className="welcome">
          Welcome!<br /><br />
        </Link>
      </div>
    </div>
  );
}

export default Header;
