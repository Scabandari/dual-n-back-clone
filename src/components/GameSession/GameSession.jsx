import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GameBoard } from '../index';
import { Button } from 'semantic-ui-react';
import ControlPanel from './ControlPanel';
import DisplayScreenSize from '../DisplayScreenSize';
import { SoundPlayer } from '../../containers';
import { toggleSound } from '../../actions/soundActions';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

const GameSession = props => {
  console.log('props', props);
  const { soundIsPlaying, toggleSound, soundFile } = props;
  return (
    <div className='site-content'>
      <SoundPlayer soundIsPlaying={soundIsPlaying} soundFile={soundFile}  />
      <Button onClick={() => toggleSound(!soundIsPlaying)}>Play Sound</Button>
      <DisplayScreenSize />
      <ControlPanel />
      <GameBoard />
    </div>
  );
};

//GameSession.propTypes = {};

const mapStateToProps = ({ sound: { soundIsPlaying, soundFile } }) => ({
  soundIsPlaying,
  soundFile
});

export default connect(
  mapStateToProps,
  { toggleSound }
)(GameSession);
