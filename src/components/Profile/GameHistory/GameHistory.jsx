import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Segment, Message } from 'semantic-ui-react';
import './GameHistory.scss';

const GameHistory = ({ userIsAuth }) => {
  console.log('userIsAuth', userIsAuth);
  const [showAuthMsg, setShowAuthMsg] = useState(false);

  return (
    <div className='profile-container'>
      {!userIsAuth && (
        <Segment placeholder>
          <Header icon>
            <Icon name='user' />
            You're not signed in.
            <br /> Signing in will let you track your progress.
          </Header>
          <Button onClick={() => setShowAuthMsg(!showAuthMsg)} primary>
            Sign In
          </Button>
          {showAuthMsg && (
            <Message
              negative
              compact
              color='red'
              content='Authentication is coming soon. This repo is being updated daily.'
            />
          )}
        </Segment>
      )}
    </div>
  );
};

GameHistory.propTypes = {};

export default GameHistory;
