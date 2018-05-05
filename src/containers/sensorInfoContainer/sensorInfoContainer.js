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
  paperRoot: {
    width: '100%',
    marginBottom: '10px'
  },
  paperRootLast: {
    width: '100%',
    flexGrow: 1
  }
}

class SensorInfoContainer extends Component {
  render() {
    const { currentSensor, classes } = this.props;
    return (
      <div className="sensor-info">
        <Grid container classes={{typeContainer: classes.gridContainer}} spacing={24} direction="column" justify="flex-start" alignItems="center">
          <Paper classes={{root: classes.paperRoot}}>
            <div className="sensor-info__overview">
              <SensorInfoOverview />
            </div>
          </Paper>
          <Paper classes={{root: classes.paperRootLast}}>
            <div className="sensor-info__current-sensors">
              TEST
            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
}

SensorInfoContainer.propTypes = {
  currentSensor: PropTypes.object.isRequired
}

export default withStyles(style)(SensorInfoContainer);
