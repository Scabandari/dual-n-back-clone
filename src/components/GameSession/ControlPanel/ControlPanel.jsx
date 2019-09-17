import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import CountDownTimer from '../../CountDownTimer';
import passScreenSize from '../../hoc/passScreenSize';
import './ControlPanel.scss';
//import { useSelector, useDispatch } from 'react-redux'

// <Button onClick={() => togglePlaySound(!playSound)}>Play Sound</Button>
//  const [playSound, togglePlaySound] = useState(false);
const ControlPanel = props => {
  //console.log('propssss', props);
  const {
    height,
    width,
    startGame,
    pauseGame,
    gameHasStarted,
    gameInProgress
  } = props;

  const size = width < 600 ? 'mini' : '';
  const buttonStyles =
    width < 600 ? { minWidth: '3.2rem' } : { minWidth: '6rem' };

  return (
    <div className='container'>
      <div className='level-info'>N = 2</div>
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
