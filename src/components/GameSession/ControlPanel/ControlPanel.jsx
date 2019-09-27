import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import CountDownTimer from '../../CountDownTimer';
import passScreenSize from '../../hoc/passScreenSize';
import Clock from '../../Clock/';
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
      <Clock
          startGame={startGame}
          pauseGame={pauseGame}
          gameHasStarted={gameHasStarted}
          gameInProgress={gameInProgress}
       />
    </div>
  );
};

ControlPanel.propTypes = {};

export default passScreenSize(ControlPanel);
