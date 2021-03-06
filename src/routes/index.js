import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import menu from './menu';
import Playground from '../pages/playground';

const render = (props) => {
  const menuContent = menu.filter(item => item.rank !== 1);
  return (
    <Dashboard {...props}>
      <Switch>
        {menuContent.map(item => (
          <Route key={item.id} path={item.path} component={item.component} />
        ))}
        <Redirect from="/" exact to="/dashboard/analysis" />
      </Switch>
    </Dashboard>
  );
};

const routes = (
  <Switch>
    <Route path="/playground" component={Playground} />
    <Route path="/" render={render} />
  </Switch>
);

export default routes;
