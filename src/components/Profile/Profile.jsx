import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import GameHistory from './GameHistory';
import PleaseLogin from './PleaseLogin';
import './Profile.scss';

const renderContent = auth => {
  switch (auth) {
    case null:
      return <h3>Loading...</h3>;
    case false:
      return <PleaseLogin />;
    default:
      return <GameHistory />;
  }
};

const Profile = ({ auth }) => {
  return (
    <div className='profile-main'>
      {renderContent(auth)}
      <div className='profile-main-action'>
        <Link to='/game-session'>
          <Button fluid>Start New Game</Button>
        </Link>
      </div>
    </div>
  );
};

Profile.propTypes = {};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
