import React from 'react';
import { refreshTokenSetup } from '../../../Utils/refreshToken';
import { useGoogleLogin } from 'react-google-login';

import Button from '@material-ui/core/Button';

const clientId = ;

function GoogleSignIn() {

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
    <Button variant="contained" onClick={signIn}>
      <span className="buttonText">Sign in with Google</span>
    </Button>
  )
}

export default GoogleSignIn;