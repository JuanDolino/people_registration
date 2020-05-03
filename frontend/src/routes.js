import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import People from './pages/People';

import NewPeople from './pages/NewPeople';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={People}></Route>
        <Route path="/people/new" render={NewPeople}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
