import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import Button from '@material-ui/core/Button';

function Logout(props) {
  const user = getUser();
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <Button variant="contained" onClick={handleLogout}>Logout</Button>
  )
}

export default Logout;

