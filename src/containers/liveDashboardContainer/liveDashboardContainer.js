import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import autoBind from 'react-autobind';
import LineChart from '../../components/charts/lineChart';
import BarChart from '../../components/charts/barChart';
import SectionDivider from '../../components/sectionDivider/sectionDivider';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import MapContainer from '../mapContainer/mapContainer';
import AppBarContainer from '../appBarContainer/appBarContainer';
import { BAIDU_MAP_API_KEY } from '../../utils/const';

const baiduMapsApiUrl = `http://api.map.baidu.com/api?v=3.0&ak=${BAIDU_MAP_API_KEY}&callback=mapsApiLoaded`;
const CENTER_COORDS = {
  x: 109.230414,
  y: 35.391788
}
const SENSOR_INFO = [
  {
    id: 1,
    name: 'Sensor 1',
    value: 100,
    x: 109.230414,
    y: 35.391788
  },
  {
    id: 2,
    name: 'Sensor 2',
    value: 200,
    x: 109.232959,
    y: 35.392693
  },
  {
    id: 3,
    name: 'Sensor 3',
    value: 300,
    x: 109.225492, 
    y: 35.391713
  },
  {
    id: 4,
    name: 'Sensor 4',
    value: 400,
    x: 109.229483, 
    y: 35.386324
  }
]
class LiveDashboardContainer extends Component {
	constructor() {
		super()
		autoBind(this)
		this.state = {
      mapsApiLoaded: false,
      currentSensor: {}
    }
    this.mapLooper = null;
	}

	componentDidMount() {
    ((d, s, id) => {
			if (d.getElementById(id)) {
				this.mapsApiLoaded();
				return;
			}
			window.mapsApiLoaded = this.mapsApiLoaded;
			const fjs = d.getElementsByTagName(s)[0];
			const js = d.createElement(s);
			js.id = id;
			js.src = baiduMapsApiUrl;
			fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'baidu-map-api');
    this.setState({
      currentSensor: SENSOR_INFO[0]
    })
  }

	componentWillUnmount() {
    clearInterval(this.mapLooper);
  }

  mapsApiLoaded() {
    this.setState({
      mapsApiLoaded: true
    })
  }

  startLooping(markers) {
    let currentMarkerIndex = 0;
    let prevMarkerIndex = -1;
    this.mapLooper = setInterval(() => {
      if (currentMarkerIndex === markers.length) {
        currentMarkerIndex = 0;
        prevMarkerIndex = markers.length - 1;
      }
      const currentSensor = SENSOR_INFO.find((el) => {
        return el.id === markers[currentMarkerIndex].sensorId();
      });
      this.setState({
        currentSensor
      })
      markers[currentMarkerIndex].setActive();
      markers[prevMarkerIndex] && markers[prevMarkerIndex].setNonActive();
      currentMarkerIndex += 1;
      prevMarkerIndex = currentMarkerIndex - 1;
    }, 5000);
  }

  render() {
    const { mapsApiLoaded, currentSensor } = this.state;
    return (
      <div className="live-dashboard">
        <AppBarContainer />
        <div className="live-dashboard__body">
          <Grid container spacing={24} justify="center" alignItems="center">
            <Grid item xs={12} sm={8}>
              {
                mapsApiLoaded &&
                  <Paper>
                    <div id="live-dashboard-map">
                      <MapContainer
                        mapNodeId="live-dashboard-map"
                        centerX={CENTER_COORDS.x}
                        centerY={CENTER_COORDS.y}
                        markerCoords={SENSOR_INFO}
                        startLooping={this.startLooping}
                      />
                    </div>
                  </Paper>
              }
            </Grid>
            <Grid item xs={12} sm={4}>
              {currentSensor.name}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LiveDashboardContainer;
