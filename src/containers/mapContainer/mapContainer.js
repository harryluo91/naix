import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Paper } from 'material-ui';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

// import MapMarker from '../../components/map/mapMarker';

class MapContainer extends Component {
	constructor() {
		super()
		autoBind(this)
		this.state = {
      map: null,
      markers: [],
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
      this.initMarkers();
    })
  }

  initMarkers() {
    const { map } = this.state;
    const { markerCoords, startLooping } = this.props;
    const promises = [];
    import ('../../components/map/mapMarker').then((module) => {
      if (map) {
        const markerCoordsConvertor = new window.BMap.Convertor();
        markerCoords.forEach((item) => {
          const markerPos = new window.BMap.Point(item.x, item.y);
          const promise = new Promise((resolve, reject) => {
            markerCoordsConvertor.translate([markerPos], 3, 5, (data) => {
              const marker = new module.MapMarker(data.points[0], item.id);
              map.addOverlay(marker);
              resolve(marker);
            })
          });
          promises.push(promise);
        });
        Promise.all(promises).then((data) => {
          this.setState({
            markers: data
          }, () => startLooping(data));
        })
      }
    })
  }

  render() {
    return (
      <div className="map-container"></div>
    );
  }
}

MapContainer.propTypes = {
  mapNodeId: PropTypes.string.isRequired,
  centerX: PropTypes.number.isRequired,
  centerY: PropTypes.number.isRequired,
  markerCoords: PropTypes.array.isRequired,
  startLooping: PropTypes.func.isRequired
}

export default MapContainer;
