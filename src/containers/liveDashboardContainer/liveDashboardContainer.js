import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';
import LineChart from '../../components/charts/lineChart';
import BarChart from '../../components/charts/barChart';

class LiveDashboardContainer extends Component {
  render() {
    return (
      <div className="live-dashboard">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <LineChart chartName="line-chart-1">
            </LineChart>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChart chartName="bar-chart-1">
            </BarChart>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LiveDashboardContainer;
