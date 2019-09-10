import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

function SoundPlayer({ soundIsPlaying, soundFile }) {
  return (
    <Fragment>
      {soundIsPlaying && (
        <Sound
          url={soundFile}
          playStatus={Sound.status.PLAYING}
          onLoading={() => console.log('onLoading...')}
          onPlaying={() => console.log('onPlaying...')}
          onFinishedPlaying={() => console.log('onFinishedPlaying...')}
        />
      )}
    </Fragment>
  );
}

SoundPlayer.propTypes = {};

export default SoundPlayer;
