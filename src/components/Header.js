import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Header(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">The Kindness Journal</h1>
      </div>
      <div>
        Welcome!<br /><br />
        <input type="button" onClick={handleLogout} value="Logout" />
      </div>
    </div>
  );
}

export default Header;
