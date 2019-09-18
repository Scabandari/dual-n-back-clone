import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GameResults = (props) => {
  const {
    correctPositives: acp,
    incorrectPositives: aip,
    incorrectNegatives: ain
  } = props.userAnswersAudio;
  const {
    correctPositives: vcp,
    incorrectNegatives: vin,
    incorrectPositives: vip
  } = props.userAnswersVisual;
  return (
    <div>
      <div className='audio'>
        Audio: cp: {acp} in: {ain} ip: {aip}
      </div>
      <div className='audio'>
        Visual: cp: {vcp} in: {vin} ip: {vip}
      </div>
    </div>
  );
};

// GameResults.propTypes = {
//   audio: PropTypes.object.isRequired,
//   visual: PropTypes.object.isRequired
// };

const mapStateToProps = ({
  gameResult: { userAnswersVisual, userAnswersAudio }
}) => ({
  userAnswersAudio,
  userAnswersVisual
});

export default connect(mapStateToProps)(GameResults);
