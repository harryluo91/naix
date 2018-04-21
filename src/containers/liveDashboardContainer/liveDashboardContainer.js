import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import autoBind from 'react-autobind';
import LineChart from '../../components/charts/lineChart';
import BarChart from '../../components/charts/barChart';
import fdhImg from '../../static/fdh.png';
import SectionDivider from '../../components/sectionDivider/sectionDivider';
import SectionHeader from '../../components/sectionHeader/sectionHeader';

const sensors = [
	{
		name: "Sensor 1",
		value: Math.floor(Math.random() * 100)
	},
	{
		name: "Sensor 2",
		value: Math.floor(Math.random() * 100)
	},
	{
		name: "Sensor 3",
		value: Math.floor(Math.random() * 100)
	},
	{
		name: "Sensor 4",
		value: Math.floor(Math.random() * 100)
	}
]

let counter = null;

class LiveDashboardContainer extends Component {
	constructor() {
		super()
		autoBind(this)
		this.state = {
			currentSensor: 0
		}
	}

	componentDidMount() {
		counter = setInterval(() => {
			let tmp = this.state.currentSensor;
			if (tmp <= 2) {
				this.setState({
					currentSensor: this.state.currentSensor + 1
				})
			} else {
				this.setState({
					currentSensor: 0
				})
			}
		}, 2000);
	}

	componentWillUnmount() {
    clearInterval(counter)
  }

  render() {
		const	{ currentSensor } = this.state;
    return (
      <div className="live-dashboard">
        <Grid container style={{height: "100%"}} spacing={16} justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
						<img src={fdhImg} width="100%"></img>
          </Grid>
          <Grid item style={{height: "100%"}} xs={12} sm={6}>
						<Grid container style={{height: "100%"}} spacing={16}>
							<Grid item style={{height: "100px"}} xs={12}>
								<SectionHeader headerText={sensors[currentSensor]['name']} />
							</Grid>
							<Grid item xs={12}>
							<span>Value 1: </span><span>{sensors[currentSensor]['value']}</span>
							</Grid>
							<Grid item xs={12}>
							<span>Value 2: </span><span>{sensors[currentSensor]['value']}</span>
							</Grid>
							<Grid item xs={12}>
							<span>Value 3: </span><span>{sensors[currentSensor]['value']}</span>
							</Grid>
							<Grid item xs={12}>
							<span>Value 4: </span><span>{sensors[currentSensor]['value']}</span>
							</Grid>
						</Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LiveDashboardContainer;
