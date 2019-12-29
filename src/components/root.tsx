import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import App from './app';
import { Foodmap } from './foodmap';

export const NotFound = () => <p>Not Found</p>;

export const Root: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/fodmap" component={Foodmap} />
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
