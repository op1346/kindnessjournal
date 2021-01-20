import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="error404">
      <h1>404 ERROR: PAGE NOT FOUND</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Error404;