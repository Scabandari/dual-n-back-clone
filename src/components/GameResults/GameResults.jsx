import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Segment, Icon, Button, Message } from 'semantic-ui-react';
import './GameResults.scss';

const GameResults = props => {
  const {
    correctPositives: acp,
    incorrectPositives: aip,
    incorrectNegatives: ain
  } = props.userAnswersAudio;
  const {
    correctPositives: vcp,
    incorrectNegatives: vin,
    incorrectPositives: vip
  } = props.userAnswersVisual;

  const [helpMessageShowing, setHelpMessageShowing] = useState(false);

  return (
    <div className='main'>
      <div>
        <Segment>
          <div className='results-container'>
            <div className='row header-help'>
              <div>Game Results</div>
              <Icon
                onClick={() => setHelpMessageShowing(!helpMessageShowing)}
                circular
                link
                size='small'
                name='help'
              />
            </div>
            <div className='result'>
              {helpMessageShowing && (
                <div className='result__help'>
                  <Message positive>
                    <p>These are correct.</p>
                  </Message>
                </div>
              )}
              <div className='row'>
                <div className='entry'>
                  <Icon size='big' color='green' name='eye' />
                  <div className='row-entry-score'>{vcp}</div>
                </div>
                <div className='entry'>
                  <Icon size='big' color='green' name='comment' />
                  <div className='row-entry-score'>{acp}</div>
                </div>
              </div>
            </div>
            <div className='result'>
              {helpMessageShowing && (
                <div className='result__help'>
                  <Message negative>
                    <p>Should have clicked but did not.</p>
                  </Message>
                </div>
              )}
              <div className='row'>
                <div className='entry'>
                  <Icon.Group size='big'>
                    <Icon name='eye' />
                    <Icon corner color='red' name='plus' />
                  </Icon.Group>
                  <div className='row-entry-score'>{vip}</div>
                </div>
                <div className='entry'>
                  <Icon.Group size='big'>
                    <Icon name='comment' />
                    <Icon corner color='red' name='plus' />
                  </Icon.Group>
                  <div className='row-entry-score'>{aip}</div>
                </div>
              </div>
            </div>

            <div className='result'>
              {helpMessageShowing && (
                <div className='result__help'>
                  <Message negative>
                    <p>Should not have clicked but did.</p>
                  </Message>
                </div>
              )}
              <div className='row'>
                <div className='entry'>
                  <Icon.Group size='big'>
                    <Icon name='eye' />
                    <Icon corner color='red' name='minus' />
                  </Icon.Group>
                  <div className='row-entry-score'>{vin}</div>
                </div>
                <div className='entry'>
                  <Icon.Group size='big'>
                    <Icon name='comment' />
                    <Icon corner color='red' name='minus' />
                  </Icon.Group>
                  <div className='row-entry-score'>{ain}</div>
                </div>
              </div>
            </div>
          </div>
        </Segment>
      </div>
      <div className='action-main'>
        <Link to='/profile'>
          <Button fluid>Continue</Button>
        </Link>
      </div>
    </div>
  );
};

// GameResults.propTypes = {
//   audio: PropTypes.object.isRequired,
//   visual: PropTypes.object.isRequired
// };

const mapStateToProps = ({
  gameResult: { userAnswersVisual, userAnswersAudio },
  gameBoard: { nLevel }
}) => ({
  userAnswersAudio,
  userAnswersVisual,
  nLevel
});

export default connect(mapStateToProps)(GameResults);
