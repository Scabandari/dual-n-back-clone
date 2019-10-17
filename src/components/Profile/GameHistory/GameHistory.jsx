import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Segment, Message } from 'semantic-ui-react';

import './GameHistory.scss';
import passScreenSize from '../../hoc/passScreenSize';

const GameHistory = ({ userIsAuth, width }) => {
  // console.log('userIsAuth', userIsAuth);
  const [showAuthMsg, setShowAuthMsg] = useState(false);

  return (
    <div className='profile-main'>
      {!userIsAuth && (
        <Segment placeholder>
          <div className="segment-content">
          <Icon name='user' size='large' />
          {/* <Header > */}

          <p>
            You're not signed in.
            <br /> Signing in will let you track your progress.
          </p>
          {/* </Header> */}
          <a href={"/auth/google"}><Button  primary>
            Sign In
          </Button></a>
          {showAuthMsg && (
            <Message
              negative
              compact
              color='red'
              content='Authentication is coming soon. This repo is being updated daily.'
            />
          )}
          </div>
        </Segment>
      )}
    </div>
  );
};

GameHistory.propTypes = {};

export default passScreenSize(GameHistory);


//onClick={() => setShowAuthMsg(!showAuthMsg)}