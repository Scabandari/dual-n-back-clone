import React, { useState } from 'react';
import { GameBoard } from '../index';
import ControlPanel from './ControlPanel';
import DisplayScreenSize from '../DisplayScreenSize';
import { SoundPlayer } from '../../containers';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

const GameSession = props => {
  return (
    <div className='site-content'>
        <DisplayScreenSize /> 
      <ControlPanel />    
      <GameBoard />
    </div>
  );
};

//GameSession.propTypes = {};

export default GameSession;
