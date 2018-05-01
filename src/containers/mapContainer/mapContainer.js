import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class MapContainer extends Component {
	constructor() {
		super()
		autoBind(this)
		this.state = {
      map: null
		}
	}

	componentDidMount() {
    this.initMap();
	}

	componentWillUnmount() {
    this.state.map.removeEventListener('resize');
  }

  initMap() {
    const { mapNodeId, centerX, centerY } = this.props;
    const map = new window.BMap.Map(mapNodeId);
    const center = new window.BMap.Point(centerX, centerY);
    const convertor = new window.BMap.Convertor();
    const pointArr = [center];
    convertor.translate(pointArr, 3, 5, (data) => {
      map.centerAndZoom(data.points[0], 16);
      map.disableDragging();
      map.disableKeyboard();
      map.disableDoubleClickZoom();
      map.addEventListener("resize", function(){
        map.setCenter(data.points[0]);
      });
      this.setState({ map });
    })
  }

  render() {
    return (
      <div className="map-container"></div>
    );
  }
}

MapContainer.propTypes = {
  mapNodeId: PropTypes.string,
  centerX: PropTypes.number,
  centerY: PropTypes.number
}

export default MapContainer;
