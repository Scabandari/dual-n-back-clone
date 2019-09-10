import React from 'react';
import PropTypes from 'prop-types';
import './BoardSquare.scss';

const BoardSquare = ({ id, overrideStyles, lightenId }) => {
  //const { top, right, bottom, left } = borderInfo;
  return (
    <div className='square' style={overrideStyles}>
      BoardSquare {id}
    </div>
  );
};

// BoardSquare.propTypes = {

// }

export default BoardSquare;
