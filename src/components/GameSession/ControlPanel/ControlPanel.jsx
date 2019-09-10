import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import CountDownTimer from '../../CountDownTimer';
import passScreenSize from '../../hoc/passScreenSize';
import './ControlPanel.scss';
//import { useSelector, useDispatch } from 'react-redux'

// <Button onClick={() => togglePlaySound(!playSound)}>Play Sound</Button>
//  const [playSound, togglePlaySound] = useState(false);
const ControlPanel = ({height, width}) => {
  return (
    <div className='container'>
      <div className='level-info'>N = 2</div>
      <div className='flex-container-row'>
        <div className='button-group'>
            <Button size={width < 600 ? 'mini': ''} positive compact>
              Start
            </Button>
        </div>
        <CountDownTimer />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {};

export default passScreenSize(ControlPanel);
