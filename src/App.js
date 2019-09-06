import './App.scss';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GameSession, Profile, Header } from './components';

const Landing = () => {
  return <h2>Landing</h2>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="site-content-container">
        <Header />
        <Switch>
          <Route path={'/'} exact component={Landing} />
          <Route path={'/profile'} exact component={Profile} />
          <Route path={'/game-session'} exact component={GameSession} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
