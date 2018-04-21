import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, withStyles } from 'material-ui';
import autoBind from 'react-autobind';

import DataCenterPageWrapper from '../../components/dataCenterPageWrapper/dataCenterPageWrapper';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import SectionDivider from '../../components/sectionDivider/sectionDivider';
import LineChart from '../../components/charts/lineChart';
import TimePicker from '../../components/timePicker/timePicker';
import DataTale from '../../components/tables/dataTable';

const style = {
  gridContainer: {
    margin: '0px'
  }
}

class SensorDetailsContainer extends Component {
  constructor() {
		super();
		autoBind(this);
    this.state = {
      sensorId: null,
      currentDate: null
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      sensorId: nextProps.match.params.sensorId,
      currentDate: nextProps.currentDate
    };
  }

  changeDate(date) {
    this.setState({ currentDate: date });
  }

  applyChartFilter() {
    console.log('apply chart filter');
  }

  render() {
    const { classes } = this.props;
    const { currentDate } = this.state;
    return (
      <DataCenterPageWrapper>
        <div className="sensor-details">
          <Grid container direction="column">
            <Grid item xs={12}>
              <SectionHeader headerText="Trend Graph"></SectionHeader>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={16}>
                <Grid item xs={3}><TimePicker label="From" date={ currentDate } changeDate={this.changeDate}/></Grid>
                <Grid item xs={3}><TimePicker label="To" date={ currentDate } changeDate={this.changeDate}/></Grid>
                <Grid item xs={3}><Button onClick={this.applyChartFilter} color="primary">Apply</Button></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <LineChart chartName="line-chart-sensor-1"/>
            </Grid>
            <SectionDivider />
          </Grid>
          <Grid container direction="column">
            <Grid item xs={12}>
              <SectionHeader headerText="Data Table"></SectionHeader>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" spacing={16}>
                <Grid item xs={3}><TimePicker label="From" date={ currentDate } changeDate={this.changeDate}/></Grid>
                <Grid item xs={3}><TimePicker label="To" date={ currentDate } changeDate={this.changeDate}/></Grid>
                <Grid item xs={3}><Button onClick={this.applyChartFilter} color="primary">Apply</Button></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <DataTale />
            </Grid>
          </Grid>
        </div>
      </DataCenterPageWrapper>
    );
  }
}

export default withStyles(style)(SensorDetailsContainer);
