import React, { Component } from 'react';
import {
  Button
} from 'react-bootstrap';
import '../App.css';
import 'jquery';

class Entries extends Component {
  countChar() {
    const textArea = document.getElementById('textArea');
    const remainingChars = document.getElementById('remainingChars');
    const max = 280;

    textArea.addEventListener('input', () => {
      const remaining = max - textArea.value.length;
      remainingChars.textContent = `${remaining} characters remaining`;
    });
  }

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
          <Button variant="primary" size="lg" type="submit" className="submit" block>Submit</Button>
        </div>

        <div className="feed">

        </div>
      </div>
    );
  }
}

export default Entries;