import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Icon, Collapse } from 'material-ui';
import autoBind from 'react-autobind';

const SIDE_BAR_LINKS = {
  SUMMARY: '/data-center/summary',
  ADVANCED: '/data-center/advanced'
}

class SideBarContainer extends Component {
  constructor() {
    super()
    autoBind(this);
  }

  state = {
    sensorMenuOpen: false
  }

  handleListToggle() {
    this.setState({
      sensorMenuOpen: !this.state.sensorMenuOpen
    })
  }

  handleNavigation = (pathname) => (e) => {
    const { history } = this.props;
    history.push(pathname);
    console.log(pathname)
  }

  render() {
    const { sensors } = this.props;
    return (
      <div className="side-bar">
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
      </div>
    );
  }
}

export default SideBarContainer;
