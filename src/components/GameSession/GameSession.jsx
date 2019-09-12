import React, { useState } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ControlPanel from './ControlPanel';
import DisplayScreenSize from '../DisplayScreenSize';
import { SoundPlayer } from '../../containers';
import { lightenSquare } from '../../actions/gameboardActions';
import { playSound } from '../../actions/soundActions';
import { useInterval } from '../../hooks';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

//TODO https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const GameSession = props => {
  console.log('props', props);
  const {
    soundIsPlaying,
    playSound,
    soundFile,
    squareNumber,
    lightenSquare
  } = props;
  return (
    <div className='site-content'>
      <DisplayScreenSize />
      <SoundPlayer soundIsPlaying={soundIsPlaying} soundFile={soundFile} />
      <ControlPanel />
      <GameBoard />
      <Button
        size=''
        style={{ marginTop: '3rem' }}
        onClick={() => lightenSquare(squareNumber + 1)}
      >
        Back {squareNumber}
      </Button>
    </div>
  );
};

//GameSession.propTypes = {};

const mapStateToProps = ({
  sound: { soundIsPlaying, soundFile },
  gameBoard: { squareNumber }
}) => ({
  soundIsPlaying,
  soundFile,
  squareNumber //NEED THIS?
});

export default connect(
  mapStateToProps,
  { playSound, lightenSquare } //NEED THIS? playSound
)(GameSession);
