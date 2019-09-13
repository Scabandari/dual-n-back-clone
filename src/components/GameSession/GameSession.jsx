import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ControlPanel from './ControlPanel';
import DisplayScreenSize from '../DisplayScreenSize';
import { SoundPlayer } from '../../containers';
import { lightenSquare, stopGame } from '../../actions/gameboardActions';
import { setSound, playSound } from '../../actions/soundActions';
import { useInterval } from '../../hooks';
//import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';
import { updateGameParams } from '../../actions/gameboardActions';

//TODO https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const GameSession = props => {
  const {
    soundIsPlaying,
    playSound,
    soundFile,
    setSound,
    squareNumber,
    lightenSquare,
    gameStates,
    updateGameParams,
    gameInProgress,
    stopGame
  } = props;

  // todo rename incVal to reflect that it is an index
  const [incVal, setIncVal] = useState(0); // increment through gameStates
  const [delay, setdelay] = useState(5000);

  useEffect(() => {
    updateGameParams();
  }, []); // todo think about when to run this

  useEffect(() => {
    if (incVal >= gameStates.length) {
      setTimeout(stopGame, 4000);
    }
  }, [incVal]);

  useInterval(
    () => {
      const { audio, squareNumber } = gameStates[incVal];
      setSound(audio);
      lightenSquare(squareNumber);
      playSound();
      setIncVal(incVal + 1);
    },
    gameInProgress ? delay : null // todo delay stored in redux
  );

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
  gameBoard: { squareNumber, gameStates, gameInProgress }
}) => ({
  soundIsPlaying,
  soundFile,
  squareNumber, //NEED THIS?
  gameStates,
  gameInProgress
});

export default connect(
  mapStateToProps,
  {
    setSound,
    playSound,
    lightenSquare,
    updateGameParams,
    stopGame
  }
)(GameSession);
