import React from 'react';

export default class Header extends React.PureComponent {
  render() {

    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">The Kindness Journal</h1>
        </div>
      </div>
    );
  }
};
