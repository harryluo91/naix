import React, { Component } from 'react';
import { Grid } from 'material-ui'
import PropTypes from 'prop-types';

class GeneralFieldReading extends Component {
  render() {
    return (
      <div className="general-field-reading">
        <Grid container spacing={8} justify="center" alignItems="center">
          <Grid item xs={6}>
            <div className="general-field-reading__label">Test</div>
          </Grid>
          <Grid item xs={6}>
            <div className="general-field-reading__value">123</div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default GeneralFieldReading;
