import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Header, Icon, Segment, Message } from 'semantic-ui-react';
import './GameHistory.scss';
import passScreenSize from '../../hoc/passScreenSize';


const GameHistory = () => {
  return (
    <div>Game History percentages and settings</div>
  );
};

GameHistory.propTypes = {};

export default passScreenSize(GameHistory);

//onClick={() => setShowAuthMsg(!showAuthMsg)}
