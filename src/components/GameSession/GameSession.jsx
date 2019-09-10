import React, { useState } from 'react';
import { GameBoard } from '../index';
import ControlPanel from './ControlPanel';
import { SoundPlayer } from '../../containers';
//import { Button } from 'semantic-ui-react';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

const GameSession = props => {
  return (
    <div className='site-content'>
      <ControlPanel />
      <GameBoard />
    </div>
  );
};

//GameSession.propTypes = {};

export default GameSession;
