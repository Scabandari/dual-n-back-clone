import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import GameHistory from './GameHistory';
import './Profile.scss';

const Profile = props => {
  return (
    <div>
      <GameHistory userIsAuth={false} />
      <div className='profile-container-action'>
        <Link to='/game-session'>
          <Button fluid>Start New Game</Button>
        </Link>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
