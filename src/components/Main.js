import React from 'react';
import Intro from '../components/Intro';
import SubmitEntry from '../components/SubmitEntry';
import Feed from '../components/Feed';

function Main() {
  return (
    <div>
      <Intro />
      <SubmitEntry />
      <Feed />
    </div>
  )
}

export default Main;