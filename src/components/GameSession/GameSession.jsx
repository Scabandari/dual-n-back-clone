import React, { useState } from 'react';
import { BoardSquare } from '../index';
import { SoundPlayer } from '../../containers';
import { Button } from 'semantic-ui-react';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

const GameSession = props => {
  const [playSound, togglePlaySound] = useState(false);
  return (
    <div className='site-content'>
      <Button onClick={() => togglePlaySound(!playSound)}>Play Sound</Button>
      <SoundPlayer soundIsPlaying={playSound} audioFile={soundfile} />
      <p>Game Session</p>
      <BoardSquare />
    </div>
  );
};

//GameSession.propTypes = {};

export default GameSession;
