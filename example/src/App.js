import React from 'react';

import ReactAlwaysVisible from 'react-always-visible';
import UserComponent from './UserComponent';

import 'react-always-visible/dist/index.css';

export default () => {
  return (
    <div className="main-container">
      <div className="top-container">
        <div className="child-container">
          <ReactAlwaysVisible>
            <UserComponent text="Should be top-bottom" />
          </ReactAlwaysVisible>
        </div>
      </div>
      <div className="middle-container" />
      <div className="bottom-container">
        <div className="child-container">
          <ReactAlwaysVisible>
            <UserComponent text="Should be bottom-top" />
          </ReactAlwaysVisible>
        </div>
      </div>
    </div>
  );
};
