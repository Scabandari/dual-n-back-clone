import React from 'react';
import Timer from 'react-compound-timer';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Clock.scss';

const Clock = ({pauseGame, startGame, gameHasStarted, gameInProgress}) => {

  return (
      <Timer startImmediately={false} lastUnit='s'>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <div className='clock'>
            {!gameHasStarted && !gameInProgress && (
              <Button
                className='game-button'
                onClick={() => {start(); startGame()} }
                positive
                icon='play'
              />
            )}
            {gameHasStarted && gameInProgress && (
              <Button
                className='game-button'
                onClick={() => {pause(); pauseGame()} }
                icon='pause'
              />
            )}

            {gameHasStarted && !gameInProgress && (
              <Button 
              className='game-button' 
              onClick={() => {start(); startGame()}} 
              icon='play' />
            )}
            <div>
              <Timer.Seconds /> sec
            </div>
          </div>
        )}
      </Timer>
  );
};

Clock.propTypes = {};

export default Clock;
