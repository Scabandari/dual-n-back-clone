import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Divider, Segment } from 'semantic-ui-react';

import NLevelRadioGroup from './NLevelRadioGroup'

// <Avatar googleId='101064566828062405563' size='100' round={true} />
const Profile = ({auth, updateNLevel}) => {
  return (
    <Segment>
        <h3>Profile</h3>
      <Avatar name={auth.displayName} />
      <Divider />
      <h3>Settings</h3>
      <NLevelRadioGroup auth={auth} updateNLevel={updateNLevel} />  
    </Segment>
  );
};

Profile.propTypes = {};

export default Profile;
