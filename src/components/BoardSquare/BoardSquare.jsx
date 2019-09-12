import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './BoardSquare.scss';

const BoardSquare = ({ id, overrideStyles, squareNumber }) => {
  //const { top, right, bottom, left } = borderInfo;
  const lighten = id === squareNumber ? ' square-lighten' : '';
  let className_ = `square${lighten}`;
  return (
    <div className={className_} style={overrideStyles}>
      {id}
    </div>
  );
};

// BoardSquare.propTypes = {

// }

const mapStateToProps = ({ gameBoard: { squareNumber } }) => ({
    squareNumber  
  });


export default connect(
    mapStateToProps
  )(BoardSquare)
