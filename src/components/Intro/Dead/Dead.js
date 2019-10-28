import React from 'react';
import PropTypes from 'prop-types';

import './Dead.scss';

const Dead = props => {
  return (
    <div className='dead-container'>
      <div className='dead-text-blob-drop-in'>
        <div className='text'>Dead</div>
        <div className='blob'></div>
      </div>
    </div>
  );
};

Dead.propTypes = {};

export default Dead;