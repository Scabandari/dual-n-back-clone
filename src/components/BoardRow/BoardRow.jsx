import React from 'react';
import PropTypes from 'prop-types';
import BoardSquare from '../BoardSquare';
import './BoardRow.scss';

const BoardRow = ({ squares, lightenId }) => {
  return (
    <div className='row-container'>
      {squares.map(({ id, overrideStyles }) => (
        <BoardSquare id={id} overrideStyles={overrideStyles} lightenId={lightenId} />
      ))}
    </div>
  );
};

BoardRow.propTypes = {
  squares: PropTypes.array.isRequired
};

export default BoardRow;
