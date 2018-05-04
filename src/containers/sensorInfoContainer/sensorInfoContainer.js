import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper, withStyles } from 'material-ui';
import PropTypes from 'prop-types';

import SectionDivider from '../../components/sectionDivider/sectionDivider';
import SensorInfoOverview from '../../components/liveDashboard/sensorInfoOverview';

const style = {
  gridContainer: {
    height: '100%',
    width: '100%',
    margin: '0px'
  },
  gridItem: {
    width: '100%',
  }
}

class SensorInfoContainer extends Component {
  render() {
    const { currentSensor, classes } = this.props;
    return (
      <div className="sensor-info">
        <Grid container classes={{typeContainer: classes.gridContainer}} spacing={24} direction="column" justify="flex-start" alignItems="center">
          <Grid item classes={{typeItem: classes.gridItem}}>
            <div className="sensor-info__overview">
              <SensorInfoOverview />
            </div>
          </Grid>
          <SectionDivider width={60}/>
          <Grid item classes={{typeItem: classes.gridItem}}>
            <div className="sensor-info__current-sensors">
              TEST
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SensorInfoContainer.propTypes = {
  currentSensor: PropTypes.object.isRequired
}

export default withStyles(style)(SensorInfoContainer);
