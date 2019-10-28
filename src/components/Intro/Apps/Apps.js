import React from 'react';
import PropTypes from 'prop-types';

import './Apps.scss';

const Apps = props => {
  return (
    <div className='apps-container'>
      <div className='apps-text-blob-drop-in'>
        <div className='text'>Apps</div>
        <div className='blob'></div>
      </div>
    </div>
  );
};

Apps.propTypes = {};

export default Apps;