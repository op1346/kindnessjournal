import React, { Component } from 'react';
import '../App.css';
import 'jquery';
import { Button, TextField } from '@material-ui/core';

class Entries extends Component {

  render() {
    return (
      <div>

        <div className="history">
          <h2>History</h2>
          <p>The Kindness Journal started off in 2012 with a friend of mine when we were in high school. At the time, I was going through a rough time and needed to know that there were good things in the world and kind people. We started a physical journal where we wrote done the kind things we or others had done. I created this website in hopes that we could spread this kindness globally. I hope it brightens up your day!</p>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
            <p>1. Write about something nice you or someone else has done.</p>
            <p>2. Read some of the nice things people have done.</p>
            <p>3. Smile, be happy!</p>
        </div>

        <div className="entry-input">
          <TextField
          id="outlined-multiline"
          multiline
          rows={4}
          placeholder="Share some Kindness"
          variant="outlined"
          onfocus ="this.value=''"
          />
          <Button variant="outlined" id="submit">Submit</Button>
        </div>

        <div className="feed">

        </div>
      </div>
    );
  }
}

export default Entries;