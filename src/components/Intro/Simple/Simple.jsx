import React from 'react';
import PropTypes from 'prop-types';

import './Simple.scss';

const Simple = props => {
  return (
    <div className='simple-container'>
      <div className='simple-text-blob-drop-in'>
        <div className='simple-text'>Simple</div>
        <div className='simple-blob'></div>
      </div>
    </div>
  );
};

Simple.propTypes = {};

export default Simple;
