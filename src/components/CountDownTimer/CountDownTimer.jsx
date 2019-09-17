import React from 'react';
import PropTypes from 'prop-types';

const CountDownTimer = ({timerRunning}) => {
    return (
        <div>
            {timerRunning ? 'Running' : 'CLOCK'}
        </div>
    )
}

CountDownTimer.propTypes = {

};

export default CountDownTimer;
