import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
//import './GameHistory.scss';

const GameHistory = ({ userIsAuth }) => {
  console.log('userIsAuth', userIsAuth);
  return (
    <div className='profile-container'>
      {!userIsAuth && (
        <Segment placeholder>
          <Header icon>
            <Icon name='user' />
            You're not signed in. <br /> Signing in will let you track your
            progress.
          </Header>
          <Button primary>Sign In</Button>
        </Segment>
      )}
    </div>
  );
};

GameHistory.propTypes = {};

export default GameHistory;
