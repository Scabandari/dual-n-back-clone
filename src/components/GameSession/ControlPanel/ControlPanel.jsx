import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import CountDownTimer from '../../CountDownTimer';
import './ControlPanel.scss';
//import { useSelector, useDispatch } from 'react-redux'

// <Button onClick={() => togglePlaySound(!playSound)}>Play Sound</Button>
//  const [playSound, togglePlaySound] = useState(false);
const ControlPanel = props => {
  return (
    <div className='container'>
      <div className='level-info'>N = 2</div>
      <div className='flex-container-row'>
        <div className='button-group'>
          <Button.Group>
            <Button compact>Back</Button>
            <Button.Or />
            <Button positive compact>
              Start
            </Button>
          </Button.Group>
        </div>
        <CountDownTimer />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
