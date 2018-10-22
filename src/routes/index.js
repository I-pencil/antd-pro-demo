import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import menu from './menu';


const render = (props) => {
  const menuContent = menu.filter(item => item.rank !== 1);
  return (
    <Dashboard {...props}>
      <Switch>
        {menuContent.map((item) => {
          return (<Route key={item.id} path={item.path} component={item.component} />);
        })}
      </Switch>
    </Dashboard>
  );
}

const routes = (
  <Switch>
    <Route path="/" render={render} />
  </Switch>
);

export default routes;
