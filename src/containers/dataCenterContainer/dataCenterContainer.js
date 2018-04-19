import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Grid, Hidden, Drawer, withStyles } from 'material-ui';
import autobind from 'react-autobind';

import AppBarContainer from '../appBarContainer/appBarContainer';
import SideBarContainer from '../sideBarContainer/sideBarContainer';
import SensorDetailsContainer from '../sensorDetailsContainer/sensorDetailsContainer';
import AdvancedContainer from '../advancedContainer/advancedContainer';
import DataSummaryContainer from '../dataSummaryContainer/dataSummaryContainer';

const style = {
  drawerPaperPerm: {
    position: 'fixed',
    top: '64px',
    width: '200px'
  }
}

const routes = [
  '/data-center/summary',
  '/data-center/sensor/:sensorId',
  '/data-center/advanced'
]

const sensors = [
  {
    name: 'Sensor 1',
    id: 1,
  },
  {
    name: 'Sensor 2',
    id: 2,
  },
  {
    name: 'Sensor 3',
    id: 3,
  },
  {
    name: 'Sensor 4',
    id: 4,
  },
]

class DataCenterContainer extends Component {
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
    const { classes, match, history } = this.props; 
    return (
      <div className="data-center">
        <AppBarContainer handleDrawerToggle={this.handleDrawerToggle}/>
        <div className="data-center__body">
          <Hidden smUp>
            <Drawer
              variant="temporary"
              open={this.state.sideNavOpen}
              onClose={this.handleDrawerToggle}
            >
              <SideBarContainer sensors={ sensors } history={ history }></SideBarContainer>
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaperPerm
              }}
            >
              <SideBarContainer sensors={ sensors } history={ history }></SideBarContainer>
            </Drawer>
          </Hidden>
          <Route exact path={`${match.url}`} component={DataSummaryContainer}></Route>
          <Route path={`${match.url}/summary`} component={DataSummaryContainer}></Route>
          <Route path={`${match.url}/advanced`} component={AdvancedContainer}></Route>
          <Route path={`${match.url}/sensor/:sensorId`} component={SensorDetailsContainer}></Route>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(DataCenterContainer);
