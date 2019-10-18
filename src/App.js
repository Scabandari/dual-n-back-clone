import './App.scss';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { GameSession, Profile, Header, GameResults, Clock, Landing } from './components';
import history from './history';
import { fetchUser } from './actions/authActions';

// const Landing = () => {
//   // look up Carousel exs in react
//   return <h2>Landing</h2>;
// };

function App({fetchUser}) {
  useEffect(() => {
      console.log(' fetchUser() gets called')
    fetchUser();
  }, []);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Landing} />
        <Route path={'/profile'} exact component={Profile} />
        <Route path={'/game-session'} exact component={GameSession} />
        <Route path={'/game-results'} exact component={GameResults} />
        <Route path={'/clock'} exact component={Clock} />
      </Switch>
    </Router>
  );
}

export default connect(
  null,
  ({fetchUser})
)(App);
