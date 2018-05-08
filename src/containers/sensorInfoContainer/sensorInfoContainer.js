import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper, Slide, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SectionDivider from '../../components/sectionDivider/sectionDivider';
import SensorInfoOverview from '../../components/liveDashboard/sensorInfoOverview';
import SensorInfoDetails from '../../components/liveDashboard/sensorInfoDetails';

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
    position: 'absolute',
    height: '100%',
  }
}

class SensorInfoContainer extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      updatingSensor: false
    }
  }

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
          <ReactCSSTransitionGroup
            className="sensor-info__current-sensors-transitions-wrapper"
            transitionName="session-info-container"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <Paper key={currentSensor.name} classes={{root: classes.paperRootLast}}>
              <div className="sensor-info__current-sensors">
                <SensorInfoDetails currentSensor={ currentSensor }/>
              </div>
            </Paper>
          </ReactCSSTransitionGroup>
        </Grid>
      </div>
    );
  }
}

SensorInfoContainer.propTypes = {
  currentSensor: PropTypes.object.isRequired
}

export default withStyles(style)(SensorInfoContainer);
