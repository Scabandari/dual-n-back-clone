import React from 'react';
import { BoardSquare, BoardRow } from '../index';
import './GameBoard.scss';
// Todo pass slices to BR and set css in B.SS
const GameBoard = () => {
  const squareData = [
    {
      id: 1,
      overrideStyles: {borderRadius: '.5rem 0 0 0'}
    },
    {
      id: 2,
      overrideStyles: {borderLeft: 0}  
    },
    {
      id: 3,
      overrideStyles: {borderLeft: 0, borderRadius: '0 .5rem 0 0'}  
    },
    {
      id: 4,
      overrideStyles: {borderTop: 0}  
    },
    {
      id: 5,
      overrideStyles: {borderLeft: 0, borderTop: 0}  
    },
    {
      id: 6,
      overrideStyles: {borderLeft: 0, borderTop: 0} 
    },
    {
      id: 7,
      overrideStyles: {borderTop: 0, borderRadius: '0 0 0 .5rem'}  
    },
    {
      id: 8,
      overrideStyles: {borderLeft: 0, borderTop: 0} 
    },
    {
      id: 9,
      overrideStyles: {borderLeft: 0, borderTop: 0, borderRadius: '0 0 .5rem 0'} 
    }
  ];
  return (
    <div className='flex-board-container'>
      <BoardRow squares={squareData.slice(0, 3)} />
      <BoardRow squares={squareData.slice(3, 6)}/>
      <BoardRow squares={squareData.slice(6, 9)}/>
    </div>
  );
};

GameBoard.propTypes = {};

export default GameBoard;
