import React, { Component } from 'react';
import { Grid, Slide } from 'material-ui'
import PropTypes from 'prop-types';

class SensorInfoDetails extends Component {
  constructor() {
    super();
    this.state = {
      slideIn: true
    }
  }
  // componentDidMount() {
  //   console.log('mount: ' + this.state.slideIn)
  // }
  // componentWillUnmount() {
  //   console.log('unmount: ' + this.state.slideIn)
  // }
  render() {
    const { currentSensor } = this.props;
    return (
      <div className="sensor-info-overview">
        {currentSensor.name}
      </div>
    )
  }
}

export default SensorInfoDetails;
