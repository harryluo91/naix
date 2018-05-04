import React, { Component } from 'react';
import { Grid } from 'material-ui'
import PropTypes from 'prop-types';

import GeneralFieldReading from '../generalFieldReading/generalFieldReading';

class SensorInfoOverview extends Component {
  render() {
    return (
      <div className="sensor-info-overview">
        <Grid container spacing={16} justify="center" alignItems="center">
          <Grid item xs={12}>
            Overview
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="flex-start" alignItems="center">
          <Grid item xs={6}>
            <GeneralFieldReading />
          </Grid>
          <Grid item xs={6}>
            <GeneralFieldReading />
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="flex-start" alignItems="center">
          <Grid item xs={6}>
            <GeneralFieldReading />
          </Grid>
          <Grid item xs={6}>
            <GeneralFieldReading />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SensorInfoOverview;
