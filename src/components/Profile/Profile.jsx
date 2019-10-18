import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Button, Icon, Segment, Message } from 'semantic-ui-react';

// <Avatar googleId='101064566828062405563' size='100' round={true} />
const Profile = props => {
  return (
    <Segment>
        <h2>Profile</h2>
      <Avatar name='Rion Developer' />
    </Segment>
  );
};

Profile.propTypes = {};

export default Profile;
