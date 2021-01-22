import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages';
import SigninPage from './pages/Signin';

function App() {
  return (
    <>
      <Switch>
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/' component={Home} exact />
      </Switch>
    </>
  );
}

export default App;
