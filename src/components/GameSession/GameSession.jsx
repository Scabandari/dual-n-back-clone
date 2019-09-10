import React, { useState } from 'react';
import { GameBoard } from '../index';
import ControlPanel from './ControlPanel';
import { SoundPlayer } from '../../containers';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';
import DisplayScreenSize from '../DisplayScreenSize';

const GameSession = props => {
  return (
    <div className='site-content'>
      <ControlPanel />
      <DisplayScreenSize />     
      <GameBoard />
    </div>
  );
};

//GameSession.propTypes = {};

export default GameSession;
