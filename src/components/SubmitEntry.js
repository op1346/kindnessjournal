import React from 'react';
import { TextField, Button } from '@material-ui/core';

function SubmitEntry() {
 return (
   <div className="submit-entry">
     <TextField
        id="outlined-multiline-static"
        label="Share Some Kindness"
        multiline
        rows={4}
        variant="outlined">
      </TextField><br />
      <Button variant="contained">Submit</Button>
   </div>
 )
}

export default SubmitEntry;