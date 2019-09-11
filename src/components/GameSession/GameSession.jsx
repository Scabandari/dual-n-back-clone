import React, { useState } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ControlPanel from './ControlPanel';
import DisplayScreenSize from '../DisplayScreenSize';
import { SoundPlayer } from '../../containers';
import { playSound } from '../../actions/soundActions';
import soundfile from '../../assets/a.mp3';
import PropTypes from 'prop-types';
import './GameSession.scss';

const GameSession = props => {
  console.log('props', props);
  const { soundIsPlaying, playSound, soundFile } = props;
  return (
    <div className='site-content'>
      <DisplayScreenSize />
      <SoundPlayer soundIsPlaying={soundIsPlaying} soundFile={soundFile} />
      <ControlPanel />
      <GameBoard />
      <Button size='mini' style={{ marginTop: '3rem' }} onClick={() => playSound()}>
        {/* <Link to={"/profile"}>Back</Link>  */} Back
      </Button>
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
  { playSound }
)(GameSession);
