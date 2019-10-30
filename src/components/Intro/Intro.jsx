import React from 'react';
import PropTypes from 'prop-types';

import './Intro.scss';

import Simple from './Simple';
import Dead from './Dead';
import Apps from './Apps';

const Intro = props => {
  return (
    <div className='intro-container'>
      <Dead />
      <span>&emsp;</span>
      <Simple />
      <span>&emsp;</span>
      <Apps />
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
