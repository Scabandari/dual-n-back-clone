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
    soundIsPlaying, // Redux state
    soundFile,
    squareNumber,
    gameInProgress,
    gameHasStarted,
    gameStates,

    setSound,  // Actions
    playSound,
    lightenSquare,
    updateGameParams,
    stopGame
  } = props;

  // Todo rename incVal to reflect that it is an index
  const [incVal, setIncVal] = useState(0); // increment through gameStates
  const [delay, setdelay] = useState(5000);

  //const [currentSquare, setCurrentSquare] = useState(10);
  const [nBackSquares, setnBackSquares] = useState({
    1: 11,
    2: 11,
    3: 11,
    4: 11,
    5: 11
  });
  //const [currentAudio, setCurrentAudio] = useState('');
  const [nBackAudio, setnBackAudio] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  });

  useEffect(() => {
    updateGameParams();
    console.log('gameStates', JSON.stringify(gameStates));
  }, []); // todo think about when to run this

  useEffect(() => {
    if (incVal >= gameStates.length) {
      setTimeout(stopGame, 3000);
    }
  }, [incVal]);

  useInterval(
    () => {
      const { audio, squareNumber: localSquareNumber } = gameStates[incVal];

      // Update local state which tracks matches between current values and those nBack
      setnBackSquares({
        ...nBackSquares,
        5: nBackSquares[4],
        4: nBackSquares[3],
        3: nBackSquares[2],
        2: nBackSquares[1],
        1: squareNumber  //currentSquare
      });
      setnBackAudio({
        ...nBackAudio,
        5: nBackAudio[4],
        4: nBackAudio[3],
        3: nBackAudio[2],
        2: nBackAudio[1],
        1: soundFile
      });

      // Fire actions
      setSound(audio);  
      lightenSquare(localSquareNumber);
      playSound();

      setIncVal(incVal + 1);
    },
    gameInProgress ? delay : null  // null will pause interval 
  );

  const nLevel = 2; // TODO this should be controlled by user

  return (
    <div className='site-content'>
      <DisplayScreenSize />
      <SoundPlayer soundIsPlaying={soundIsPlaying} soundFile={soundFile} />
      <ControlPanel />
      <GameBoard />
      <Button icon={'eye'} positive={squareNumber === nBackSquares[nLevel]} />
      <Button icon={'comment'} positive={soundFile === nBackAudio[nLevel]} />
      {!gameHasStarted && (
        <Button
          style={{ marginTop: '3rem' }}
          onClick={() => lightenSquare(squareNumber + 1)}
        >
          Back {squareNumber}
        </Button>
      )}

      {gameHasStarted && (
        <Button
          negative
          style={{ marginTop: '3rem' }}
          onClick={() => lightenSquare(squareNumber + 1)}
        >
          Quit {squareNumber}
        </Button>
      )}
    </div>
  );
};

//GameSession.propTypes = {};

const mapStateToProps = ({
  sound: { soundIsPlaying, soundFile },
  gameBoard: { squareNumber, gameStates, gameInProgress, gameHasStarted }
}) => ({
  soundIsPlaying,
  soundFile,
  squareNumber, 
  gameStates,
  gameInProgress,
  gameHasStarted
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
