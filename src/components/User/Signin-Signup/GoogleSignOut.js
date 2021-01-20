import React from 'react';
import { refreshTokenSetup } from '../Utils/refreshToken';
import { useGoogleLogout } from 'react-google-login';

import Button from '@material-ui/core/Button';

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function GoogleSignOut() {

  const onLogoutSuccess = (res) => {
    alert('Logged out successfully');
  }

  const onFailure = () => {
    console.log('Handle failure cases');
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button variant="contained" onClick={signOut}>
      <span className="buttonText">Sign out</span>
    </Button>
  )
}

export default GoogleSignOut;