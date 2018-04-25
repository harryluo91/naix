import React from "react";
import { Route } from "react-router-dom";

import GuideBoard from './containers/guideBoardContainer/guideBoardContainer';
import Settings from './containers/settingsContainer/settingsContainer';
import LiveDashboard from './containers/liveDashboardContainer/liveDashboardContainer';
import DataCenter from './containers/dataCenterContainer/dataCenterContainer';
import Login from './containers/loginContainer/loginContainer';

import PrivateRoute from './components/hoc/privateRoute';
import AppSelect from './components/appSelect/appSelect';

const Routes = () => (
    <div id="main">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/app-select" component={AppSelect} />
        <PrivateRoute path="/live-dashboard" component={LiveDashboard} />
        <PrivateRoute path="/data-center" component={DataCenter} />
        <PrivateRoute path="/guide-board" component={GuideBoard} />
        <PrivateRoute path="/settings" component={Settings} />
    </div>
)

export default Routes;