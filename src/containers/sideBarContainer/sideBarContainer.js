import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Icon, Collapse, Hidden, Drawer, withStyles } from 'material-ui';
import autoBind from 'react-autobind';

const SIDE_BAR_LINKS = {
  SUMMARY: '/data-center/summary',
  ADVANCED: '/data-center/advanced'
}

const SETTINGS_PAGE_SIDE_BAR_LINKS = [
  {
    name: 'Live Dashboard',
    url: '/settings/live-dashborad'
  },
  {
    name: 'Guide Board',
    url: '/settings/guide-board'
  },
  {
    name: 'Settings',
    url: '/settings/admin'
  }
]

const TYPE = {
  DATA_CENTER: 'dataCenter',
  SETTINGS: 'settings'
}

const style = {
  drawerPaperPerm: {
    position: 'fixed',
    top: '64px',
    width: '200px'
  },
  isActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  }
}

class SideBarContainer extends Component {
  constructor() {
    super()
    autoBind(this);
  }

  state = {
    sensorMenuOpen: false,
  }

  handleListToggle() {
    this.setState({
      sensorMenuOpen: !this.state.sensorMenuOpen
    })
  }

  handleNavigation = (pathname) => (e) => {
    const { history } = this.props;
    history.push(pathname);
  }

  isListActive(currentPath) {
    const { history } = this.props;
    console.log(history.location.pathname === currentPath);
    return history.location.pathname === currentPath;
  }

  generateSideBarContent(type, sensors, classes) {
    if (type === TYPE.DATA_CENTER) {
      return (
        <List component="nav">
          <ListItem button onClick={ this.handleNavigation(SIDE_BAR_LINKS.SUMMARY) }>
            <ListItemText primary="Summary" />
          </ListItem>
          <ListItem button onClick={this.handleListToggle}>
            <ListItemText primary="Sensors" />
            {this.state.sensorMenuOpen ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
          </ListItem>
          <Collapse in={this.state.sensorMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                sensors.map((el, i) => (
                  <ListItem button onClick={ this.handleNavigation(`/data-center/sensor/${el.id}`) } key={i}>
                    <ListItemText primary={el.name} />
                  </ListItem>
              ))
              }
            </List>
          </Collapse>
          <ListItem button onClick={ this.handleNavigation(SIDE_BAR_LINKS.ADVANCED) }>
            <ListItemText primary="Advanced" />
          </ListItem>
        </List>
      )
    } else if (type === TYPE.SETTINGS) {
      return (
        <List component="nav">
        {
          SETTINGS_PAGE_SIDE_BAR_LINKS.map((el, i) => (
            <ListItem button classes={this.isListActive(el.url) ? {root: classes.isActive} : null} onClick={ this.handleNavigation(el.url) } key={i}>
              <ListItemText primary={el.name} />
            </ListItem>
          ))
        }
        </List>
      )
    }
  }

  render() {
    const { type, sensors, classes, sideNavOpen, handleDrawerToggle } = this.props;
    return (
      <div className="side-bar">
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={sideNavOpen}
            onClose={handleDrawerToggle}
          >
            {this.generateSideBarContent(type, sensors, classes)}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaperPerm
            }}
          >
            {this.generateSideBarContent(type, sensors, classes)}
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

export default withStyles(style)(withRouter(SideBarContainer));
