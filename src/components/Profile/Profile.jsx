import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import GameHistory from './GameHistory';
import './Profile.scss';

const Profile = props => {
  return (
    <div className="profile-main">
      <GameHistory userIsAuth={false} />
      <div className='profile-main-action'>
        <Link to='/game-session'>
          <Button fluid>Start New Game</Button>
        </Link>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
