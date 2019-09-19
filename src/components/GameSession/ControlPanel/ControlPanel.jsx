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

  const size = width < 800 ? 'mini' : '';
  const buttonStyles =
    width < 800 ? { minWidth: '3.2rem' } : { minWidth: '6rem' };

  return (
    <div className='control-panel-container'>
      <div>N = {nLevel}</div>
      <div className='flex-container-row'>
        <div className='button-group'>
          {!gameHasStarted && !gameInProgress && (
            <Button
              style={buttonStyles}
              onClick={startGame}
              size={size}
              positive
              compact
              icon='play'
            />
          )}

          {gameHasStarted && gameInProgress && (
            <Button
              style={buttonStyles}
              onClick={pauseGame}
              size={size}
              compact
              icon='pause'
            />
          )}

          {gameHasStarted && !gameInProgress && (
            <Button
              style={buttonStyles}
              onClick={startGame}
              size={size}
              compact
              icon='play'
            />
          )}
        </div>
        <CountDownTimer timerRunning={gameHasStarted && gameInProgress} />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {};

export default passScreenSize(ControlPanel);
