import './App.scss';
import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { GameSession, Profile, Header, GameResults } from './components';
import history from './history';

const Landing = () => {
  // look up Carousel exs in react
  return <h2>Landing</h2>;
};

function App() {
  return (
    <Router history={history}>
      <div className='site-content-container'>
        <Header />
        <Switch>
          <Route path={'/landing'} exact component={Landing} />
          <Route path={'/profile'} exact component={Profile} />
          <Route path={'/'} exact component={Profile} />
          <Route path={'/game-session'} exact component={GameSession} />
          <Route path={'/game-results'} exact component={GameResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
