import React from "react";
import { Route } from "react-router-dom";

import LiveDashboard from './containers/liveDashboardContainer/liveDashboardContainer';
import DataCenter from './containers/dataCenterContainer/dataCenterContainer';
import Login from './containers/loginContainer/loginContainer';

import PrivateRoute from './components/hoc/privateRoute';
import AppSelect from './components/appSelect/appSelect';

const Routes = () => (
    <div>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/app-select" component={AppSelect} />
        <PrivateRoute path="/live-dashboard" component={LiveDashboard} />
        <PrivateRoute path="/data-center" component={DataCenter} />
    </div>
)

export default Routes;