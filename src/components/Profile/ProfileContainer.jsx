import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import Profile from './Profile';
import PleaseLogin from './PleaseLogin';
import { updateNLevel } from '../../actions/gameboardActions';
import './Profile.scss';

const renderContent = (auth, updateNLevel, nLevel) => {
  switch (auth) {
    case null:
      return <h3>Loading...</h3>;
    case false:
      return <PleaseLogin />;
    default:
      return <Profile auth={auth} nLevel={nLevel} updateNLevel={updateNLevel} />;
  }
};

const ProfileContainer = ({ auth, updateNLevel, nLevel }) => {

  return (
    <div className='profile-main'>
      {renderContent(auth, updateNLevel, nLevel)}
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
    auth: state.auth,
    nLevel: state.gameBoard.nLevel
  };
};

export default connect(
  mapStateToProps,
  { updateNLevel }
)(ProfileContainer);
