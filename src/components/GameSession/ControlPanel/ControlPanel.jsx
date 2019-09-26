import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import CountDownTimer from '../../CountDownTimer';
import passScreenSize from '../../hoc/passScreenSize';
import './ControlPanel.scss';

const ControlPanel = props => {
  const {
    height,
    width,
    startGame,
    pauseGame,
    gameHasStarted,
    gameInProgress,
    nLevel
  } = props;

  return (
    <div className='control-panel-container'>
      <div>N = {nLevel}</div>
      <div className='flex-container-row'>
        {!gameHasStarted && !gameInProgress && (
          <Button
            className='game-button'
            onClick={startGame}
            positive
            icon='play'
          />
        )}

        {gameHasStarted && gameInProgress && (
          <Button className='game-button' onClick={pauseGame} icon='pause' />
        )}

        {gameHasStarted && !gameInProgress && (
          <Button className='game-button' onClick={startGame} icon='play' />
        )}
        <CountDownTimer timerRunning={gameHasStarted && gameInProgress} />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {};

export default passScreenSize(ControlPanel);
