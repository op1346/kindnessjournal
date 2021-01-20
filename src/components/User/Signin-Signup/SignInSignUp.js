import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../../../Utils/Common';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../../Utils/refreshToken';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function SignInSignup(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  const loggedIn = useSelector(state => state.LoggedIn);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  const onSuccess = (res) => {
    console.log('Login Success: currentUser', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <div className="login">
      Login<br /><br />
      <div>
        Email<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <> <small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <Button variant="contained" value={loading ? 'Loading...': 'Login'} onClick={handleLogin} disabled={loading}>Log in</Button><br />
      <Button variant="contained" onClick={signIn}>
      <span className="buttonText">Sign in with Google</span>
    </Button>
      <div className="password-reset">
        <Link to='/password-reset'>Forgot your password?</Link>
      </div>
      <div className="no-account">
        Don't have an account? <Link to='/signup'>Register Now</Link>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

export default SignInSignup;
