import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header(props) {
  return (
    <div className="header">
      <Router>
        <div className="header--logo">
          <NavLink to='/'>The Kindness Journal</NavLink>
        </div>
        <div className="user">
          <NavLink to='/login'>
            <AccountCircleOutlinedIcon style={{ fontSize: 40}}/>
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path='/' />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Header;
