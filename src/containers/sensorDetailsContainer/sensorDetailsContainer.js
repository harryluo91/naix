import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';
import DataCenterPageWrapper from '../../components/dataCenterPageWrapper/dataCenterPageWrapper';

class SensorDetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      sensorId: null
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      sensorId: nextProps.match.params.sensorId
    };
  }

  render() {
    return (
      <DataCenterPageWrapper>
        <div className="sensor-details">
          Sensor Details {this.state.sensorId}
        </div>
      </DataCenterPageWrapper>
    );
  }
}

export default SensorDetailsContainer;
