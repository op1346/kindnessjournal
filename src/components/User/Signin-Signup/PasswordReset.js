import React from 'react';
import { TextField, Button } from '@material-ui/core';

function PasswordReset() {
  return (
    <div>
      Reset Password
      <form>
        <TextField id="resetPassword-email" label="Email" /><br />
        <Button variant="contained" color ="primary">Submit Reset</Button>
      </form>
    </div>
  );
}

export default PasswordReset;