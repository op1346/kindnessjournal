import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import Button from '@material-ui/core/Button';

function Header(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">The Kindness Journal</h1>
        </div>
        <div className="welcome">
          Welcome!<br /><br />
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
