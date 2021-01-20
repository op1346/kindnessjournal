import React from 'react';
import {  NavLink } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header(props) {
  return (
    <div className="header">
      <div className="header--logo">
        <NavLink to='/'>The Kindness Journal</NavLink>
      </div>
      <div className="user">
        <NavLink to='/signinsignup'>
          <AccountCircleOutlinedIcon style={{ fontSize: 40}}/>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
