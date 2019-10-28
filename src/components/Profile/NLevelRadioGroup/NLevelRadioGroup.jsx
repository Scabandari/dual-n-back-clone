import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';

// TODO use action creator here and update user's nLevel on server, then redux on success

const handleRadioChange = (userId, nLevel, updateNLevel, setChosen) => {
  setChosen(nLevel);
  updateNLevel(userId, Number(nLevel));
};

const NLevelRadioGroup = ({ auth: { _id }, updateNLevel, nLevel = 2 }) => {
  const [chosen, setChosen] = useState(nLevel.toString());
  return (
    <Form>
      <Form.Field>
        N Level: <b>{chosen}</b>
      </Form.Field>
      <Form.Field>
        <Radio
          label='2'
          name='radioGroup'
          value='2'
          checked={chosen === '2'}
          onChange={(e, { value }) =>
            handleRadioChange(_id, value, updateNLevel, setChosen)
          }
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='3'
          name='radioGroup'
          value='3'
          checked={chosen === '3'}
          onChange={(e, { value }) =>
            handleRadioChange(_id, value, updateNLevel, setChosen)
          }
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='4'
          name='radioGroup'
          value='4'
          checked={chosen === '4'}
          onChange={(e, { value }) =>
          handleRadioChange(_id, value, updateNLevel, setChosen)
        }
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='5'
          name='radioGroup'
          value='5'
          checked={chosen === '5'}
          onChange={(e, { value }) =>
          handleRadioChange(_id, value, updateNLevel, setChosen)
        }
        />
      </Form.Field>
    </Form>
  );
};

NLevelRadioGroup.propTypes = {};

export default NLevelRadioGroup;
