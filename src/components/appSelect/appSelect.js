import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper, withStyles } from 'material-ui';

import ModuleCard from '../moduleCard/moduleCard';

const style = {
  outerItem: {
    width: '100%',
    flexBasis: '50%'
  },
  innerContainer: {
    height: '100%',
  },
  innerItem: {
    height: '100%',
  },
  paperRoot: {
    height: '100%'
  }
}

class AppSelect extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="app-select">
        <div className="app-select__wrapper">
          <Grid container justify="center" alignItems="center" spacing={24}>
            <Grid item xs={12} sm={3} classes={{item: classes.innerItem}}>
              <Link to="/guide-board">
                <Paper classes={{root: classes.paperRoot}}>
                  <div className="app-select__link-content">
                    <ModuleCard heading="Guide Board"/>
                  </div>                 
                </Paper>
              </Link>  
            </Grid>
            <Grid item xs={12} sm={3} classes={{item: classes.innerItem}}>
              <Link to="/live-dashboard">
                <Paper classes={{root: classes.paperRoot}}>
                  <div className="app-select__link-content">
                    <ModuleCard heading="Live Dashboard"/>
                  </div>
                </Paper>
              </Link>  
            </Grid>
            <Grid item xs={12} sm={3} classes={{item: classes.innerItem}}>
              <Link to="/data-center">
                <Paper classes={{root: classes.paperRoot}}>
                  <div className="app-select__link-content">
                    <ModuleCard heading="Data Center"/>
                  </div>                 
                </Paper>
              </Link>  
            </Grid>
            <Grid item xs={12} sm={3} classes={{item: classes.innerItem}}>
              <Link to="/settings">
                <Paper classes={{root: classes.paperRoot}}>
                  <div className="app-select__link-content">
                    <ModuleCard heading="Settings"/>
                  </div>
                </Paper>
              </Link>  
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(AppSelect);
