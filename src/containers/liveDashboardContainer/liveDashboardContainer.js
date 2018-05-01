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
const FDH_GOOGLE_COORDS = {
  x: 109.230414,
  y: 35.391788
}
class LiveDashboardContainer extends Component {
	constructor() {
		super()
		autoBind(this)
		this.state = {
      mapsApiLoaded: false
		}
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
	}

	componentWillUnmount() {
  }

  mapsApiLoaded() {
    this.setState({
      mapsApiLoaded: true
    })
  }

  render() {
    const { mapsApiLoaded } = this.state;
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
                        centerX={FDH_GOOGLE_COORDS.x}
                        centerY={FDH_GOOGLE_COORDS.y}
                      />
                    </div>
                  </Paper>
              }
            </Grid>
            <Grid item xs={12} sm={4}>
              Data
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LiveDashboardContainer;
