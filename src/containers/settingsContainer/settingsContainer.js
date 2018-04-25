import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Grid, Hidden, Drawer, withStyles } from 'material-ui';
import autobind from 'react-autobind';

import AppBarContainer from '../appBarContainer/appBarContainer';
import SideBarContainer from '../sideBarContainer/sideBarContainer';
import DataSummaryContainer from '../dataSummaryContainer/dataSummaryContainer';

class SettingsContainer extends Component {
  constructor() {
    super()
    autobind(this);
  }

  state = {
    sideNavOpen: false
  }

  handleDrawerToggle() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }

  render() {
    const { match } = this.props; 
    return (
      <div className="settings">
        <AppBarContainer handleDrawerToggle={this.handleDrawerToggle}/>
        <div className="settings__body">
          <SideBarContainer handleDrawerToggle={this.handleDrawerToggle} sideNavOpen={this.state.sideNavOpen} type="settings" ></SideBarContainer>
          <Route exact path={`${match.url}`} component={DataSummaryContainer}></Route>
          <Route path={`${match.url}/live-dashboard`} component={DataSummaryContainer}></Route>
          <Route path={`${match.url}/guide-board`} component={DataSummaryContainer}></Route>
          <Route path={`${match.url}/admin`} component={DataSummaryContainer}></Route>
        </div>
      </div>
    );
  }
}

export default SettingsContainer;
