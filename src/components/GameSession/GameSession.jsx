import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import GameBoard from './GameBoard';
import ControlPanel from './ControlPanel';
import VisualCheck from '../VisualCheck';
import { SoundPlayer } from '../../containers';
import { lightenSquare, stopGame } from '../../actions/gameboardActions';
import { setSound, playSound } from '../../actions/soundActions';
import { setGameResults } from '../../actions/gameResultActions';
import { updateGameParams } from '../../actions/gameboardActions';
import { useInterval } from '../../hooks';
//import soundfile from '../../assets/a.mp3';
import history from '../../history';
import './GameSession.scss';


const GameSession = props => {
  const {
    soundIsPlaying, // Redux state
    soundFile,
    squareNumber,
    gameInProgress,
    gameHasStarted,
    gameStates,
    nLevel,

    setSound, // Actions
    playSound,
    lightenSquare,
    updateGameParams,
    stopGame,
    setGameResults
  } = props;

  // Todo rename incVal to reflect that it is an index
  const [incVal, setIncVal] = useState(0); // increment through gameStates
  const [delay, setdelay] = useState(5000);
  const [shouldHaveClickedAudio, setShouldHaveClickedAudio] = useState(false);
  const [shouldHaveClickedVisual, setShouldHaveClickedVisual] = useState(false);
  const [isFirstAudioClick, setFirstAudioClick] = useState(true);
  const [isFirstVisualClick, setFirstVisualClick] = useState(true);

  const [userAnswersAudio, setAnswersAudio] = useState({
    correctPositives: 0,
    incorrectPositives: 0,
    incorrectNegatives: 0
  });
  const [userAnswersVisual, setAnswersVisual] = useState({
    correctPositives: 0,
    incorrectPositives: 0,
    incorrectNegatives: 0
  });

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
  }, []); // todo think about when to run this

  // Called when Game Session finishes, clean up
  useEffect(() => {
    if (incVal >= gameStates.length) {
      setGameResults({ userAnswersAudio, userAnswersVisual });
      setTimeout(stopGame, 3000);
      lightenSquare(99);
      history.push('/game-results');
    }
  }, [incVal]);

  // Expect a click
  useEffect(() => {
    if (soundFile === nBackAudio[nLevel]) {
      setShouldHaveClickedAudio(true);
    } else {
      setShouldHaveClickedAudio(false);
    }
  }, [nBackAudio, soundFile]);

  // Expect a click
  useEffect(() => {
    if (squareNumber === nBackSquares[nLevel]) {
      setShouldHaveClickedVisual(true);
    } else {
      setShouldHaveClickedVisual(false);
    }
  }, [nBackSquares, squareNumber]);

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useInterval(
    () => {
      // Check if user should have clicked either audio or visual and update results
      if (shouldHaveClickedAudio) {
        console.log('shouldHaveClickedAudio');
        console.log('current audio', soundFile);
        console.log('nBack audio', nBackAudio[nLevel]);
        console.log('current square', squareNumber);
        console.log('nBack audio', nBackSquares[nLevel]);

        const { incorrectPositives } = userAnswersAudio;
        setAnswersAudio({
          ...userAnswersAudio,
          incorrectPositives: incorrectPositives + 1
        });
      }
      if (shouldHaveClickedVisual) {
        console.log('shouldHaveClickedVisual');
        console.log('current audio', soundFile);
        console.log('nBack audio', nBackAudio[nLevel]);
        console.log('current square', squareNumber);
        console.log('nBack audio', nBackSquares[nLevel]);

        const { incorrectPositives } = userAnswersVisual;
        setAnswersVisual({
          ...userAnswersVisual,
          incorrectPositives: incorrectPositives + 1
        });
      }
      // reset these every interval
      setShouldHaveClickedAudio(false);
      setShouldHaveClickedVisual(false);
      setFirstAudioClick(true);
      setFirstVisualClick(true);

      const { audio: localAudio, squareNumber: localSquareNumber } = gameStates[
        incVal
      ];

      // Update local state which tracks matches between current values and those nBack
      setnBackSquares({
        ...nBackSquares,
        5: nBackSquares[4],
        4: nBackSquares[3],
        3: nBackSquares[2],
        2: nBackSquares[1],
        1: squareNumber
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
      setSound(localAudio);
      playSound();
      lightenSquare(localSquareNumber);
      setIncVal(incVal + 1);
    },
    gameInProgress ? delay : null // null will pause interval
  );

  // const nLevel = 2; // TODO this should be controlled by user

  const handleClickVisual = () => {
    //console.log('handleClickVisual')
    if (!isFirstVisualClick) {
      return;
    }
    setFirstVisualClick(false);
    if (squareNumber === nBackSquares[nLevel]) {
      const { correctPositives } = userAnswersVisual;
      setAnswersVisual({
        ...userAnswersVisual,
        correctPositives: correctPositives + 1
      });
      setShouldHaveClickedVisual(false); // no longer 'should' but 'did' click
    } else {
      const { incorrectNegatives } = userAnswersVisual;
      setAnswersVisual({
        ...userAnswersVisual,
        incorrectNegatives: incorrectNegatives + 1
      });
    }
  };
  const handleClickAudio = () => {
    if (!isFirstAudioClick) {
      return;
    }
    setFirstAudioClick(false);
    //console.log('handleClickAudio')
    if (soundFile === nBackAudio[nLevel]) {
      // correct
      const { correctPositives } = userAnswersAudio;
      setAnswersAudio({
        ...userAnswersAudio,
        correctPositives: correctPositives + 1
      });
      setShouldHaveClickedAudio(false); // no longer 'should' but 'did' click
    } else {
      // incorrect
      const { incorrectNegatives } = userAnswersAudio;
      setAnswersAudio({
        ...userAnswersAudio,
        incorrectNegatives: incorrectNegatives + 1
      });
    }
  };
  return (
    <div className='game-session-main'>
      <ControlPanel nLevel={nLevel} />
      {/* <VisualCheck
        userAnswersVisual={userAnswersVisual}
        userAnswersAudio={userAnswersAudio}
      /> */}
      <GameBoard />
      <div className='game-button-group'>
        <Button
          onClick={handleClickVisual}
          className='game-button'
          icon={'eye'}
          //positive={squareNumber === nBackSquares[nLevel]}
        />
        <Button
          onClick={handleClickAudio}
          className='game-button'
          icon={'comment'}
          //positive={soundFile === nBackAudio[nLevel]}
        />
      </div>
      <Link to='/profile'>
        <Button
          fluid
          negative={gameHasStarted}
          //style={{ marginTop: '3rem' }}
          onClick={() => stopGame()}
        >
          {gameHasStarted ? 'Quit' : 'Back'}
        </Button>
      </Link>
      <SoundPlayer soundIsPlaying={soundIsPlaying} soundFile={soundFile} />
    </div>
  );
};

//GameSession.propTypes = {};

const mapStateToProps = ({
  sound: { soundIsPlaying, soundFile },
  gameBoard: {
    squareNumber,
    gameStates,
    gameInProgress,
    gameHasStarted,
    nLevel
  }
}) => ({
  soundIsPlaying,
  soundFile,
  squareNumber,
  gameStates,
  gameInProgress,
  gameHasStarted,
  nLevel
});

export default connect(
  mapStateToProps,
  {
    setSound,
    playSound,
    lightenSquare,
    updateGameParams,
    stopGame,
    setGameResults
  }
)(GameSession);
