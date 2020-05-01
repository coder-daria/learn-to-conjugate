import React from 'react';
import { Switch, Route } from "react-router-dom";

import { LandingView, SettingsView } from '../layouts';

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <LandingView />
  },
  {
    path: "/settings",
    component: () => <SettingsView />
  },
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        children={<route.component />}
      />
    ))}
  </Switch>
);

export default Routes;
