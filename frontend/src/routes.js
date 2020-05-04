import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import People from './pages/People';

import NewPeople from './pages/NewPeople';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={People}></Route>
        <Route path="/people/new" component={NewPeople}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
