import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';

class AppSelect extends Component {
  render() {
    return (
      <div className="app-select">
        <div className="app-select__wrapper">
          <Grid container justify="center" alignItems="center" spacing={24}>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={24}>
                <Grid item xs={6} sm={3}>
                  <Link to="/guide-board">
                    <Paper>
                      <div className="app-select__link-content">
                        Guide Board
                      </div>                 
                    </Paper>
                  </Link>  
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Link to="/live-dashboard">
                    <Paper>
                      <div className="app-select__link-content">
                        Live Dashboard
                      </div>
                    </Paper>
                  </Link>  
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={24}>
                <Grid item xs={6} sm={3}>
                  <Link to="/data-center">
                    <Paper>
                      <div className="app-select__link-content">
                        Data Center
                      </div>                 
                    </Paper>
                  </Link>  
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Link to="/settings">
                    <Paper>
                      <div className="app-select__link-content">
                        Settings
                      </div>
                    </Paper>
                  </Link>  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AppSelect;
