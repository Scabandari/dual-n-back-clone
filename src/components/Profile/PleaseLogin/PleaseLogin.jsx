import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Segment, Message } from 'semantic-ui-react';
import './PleaseLogin.scss';

const PleaseLogin = () => {
  return (
    <div className='profile-main'>
      <Segment placeholder>
        <div className='segment-content'>
          <Icon name='user' size='large' />
          <p>
            You're not signed in.
            <br /> Signing in will let you track your progress.
          </p>
          <a href={'/dnbc/auth/google'}>
            <Button primary>Google Sign In</Button>
          </a>
        </div>
      </Segment>
    </div>
  );
};

PleaseLogin.propTypes = {};

export default PleaseLogin;

