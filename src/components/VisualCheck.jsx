import React from 'react';
import PropTypes from 'prop-types';

const VisualCheck = props => {
  const {
    userAnswersVisual: {
      correctPositives: vcp,
      incorrectPositives: vip,
      incorrectNegatives: vin
    },
    userAnswersAudio: {
      correctPositives: acp,
      incorrectPositives: aip,
      incorrectNegatives: ain
    }
  } = props;
  return <div>
      vcp: {vcp} vip: {vip} vin: {vin} <br/>
      acp: {acp} aip: {aip} ain: {ain}
      </div>;
};

VisualCheck.propTypes = {};

export default VisualCheck;
