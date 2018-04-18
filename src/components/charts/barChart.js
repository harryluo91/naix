import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import Echarts from 'echarts';
import autobind from 'react-autobind';

const defaultOptions = {
  title: {
      text: 'Bar Chart'
  },
  tooltip: {},
  legend: {
      data:['Sales']
  },
  xAxis: {
      data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
  },
  yAxis: {},
  series: [{
      name: 'Sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
};

class BarChart extends Component {
  constructor () {
    super();
    autobind(this);
    this.state = {
      barChart: null
    }
  }

  componentDidMount() {
    const { chartName } = this.props;
    this.setState({
      barChart: Echarts.init(document.getElementById(chartName))
    }, () => {
      this.state.barChart.setOption(defaultOptions);
      window.addEventListener("resize", this.resizeChart.bind(this));
    })
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.resizeChart.bind(this));
  }

  resizeChart() {
    this.state.barChart.resize();
  }

  render() {
    return (
      <div id={this.props.chartName} style={{height: '300px', width: '100%'}}></div>
    );
  }
}

export default BarChart;
