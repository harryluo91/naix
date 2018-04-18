import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, AppBar, Toolbar, IconButton, Icon, Typography, Hidden, withStyles } from 'material-ui';

const style = {
  appBar: {
    zIndex: 1201,
    height: '64px'
  },
  toolbar: {
    height: '64px'
  }
}

class AppBarContainer extends Component {
  render() {
    const { handleDrawerToggle, classes } = this.props;
    return (
      <div className="app-bar">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Hidden smUp>
              <IconButton color="inherit" aria-label="Menu" onClick={ handleDrawerToggle }>
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(style)(AppBarContainer);
