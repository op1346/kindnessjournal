import React from 'react';
import { userForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignUp(props) {

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account!</p>



      <Button variant="contained">Sign Up</Button><br />
      Already have an account?<NavLink to='/login'>Login here.</NavLink>
    </div>
  );
}

export default SignUp;
