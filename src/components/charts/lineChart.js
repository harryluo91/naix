import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import Echarts from 'echarts';
import autobind from 'react-autobind';

const defaultOptions = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
  }]
};

class LineChart extends Component {
  constructor () {
    super();
    autobind(this);
    this.state = {
      lineChart: null
    }
  }

  componentDidMount() {
    const { chartName } = this.props;
    this.setState({
      lineChart: Echarts.init(document.getElementById(chartName))
    }, () => {
      this.state.lineChart.setOption(defaultOptions);
      window.addEventListener("resize", this.resizeChart(this.state.lineChart));
    })
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.resizeChart(this.state.lineChart));
  }

  resizeChart(chart) {
    chart.resize();
  }

  render() {
    return (
      <div id={this.props.chartName} style={{height: '300px', width: '100%'}}></div>
    );
  }
}

export default LineChart;
