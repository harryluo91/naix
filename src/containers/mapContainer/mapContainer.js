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
    this.markerLooper = null;
  }

	componentDidMount() {
    this.initMap();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.mapFinishedLoading && this.props.mapFinishedLoading) {
      this.startLooping();
    }
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
    const { map, markers } = this.state;
    const { markerCoords, mapDataLoaded } = this.props;
    const promises = [];
    import ('../../components/map/mapMarker').then((module) => {
      if (map) {
        const markerCoordsConvertor = new window.BMap.Convertor();
        markerCoords.forEach((item) => {
          const markerPos = new window.BMap.Point(item.x, item.y);
          const promise = new Promise((resolve, reject) => {
            markerCoordsConvertor.translate([markerPos], 3, 5, (data) => {
              const marker = new module.MapMarker(data.points[0]);
              map.addOverlay(marker);
              resolve(marker);
            })
          });
          promises.push(promise);
        });
        Promise.all(promises).then((data) => {
          this.setState({
            markers: data
          }, () => mapDataLoaded());
        })
      }
    })
  }

  startLooping() {
    const { markers } = this.state;
    let currentMarkerIndex = 0;
    let prevMarkerIndex = -1;
    this.mapLooper = setInterval(() => {
      if (currentMarkerIndex === markers.length) {
        currentMarkerIndex = 0;
        prevMarkerIndex = markers.length - 1;
      }
      markers[currentMarkerIndex].setActive();
      markers[prevMarkerIndex] && markers[prevMarkerIndex].setNonActive();
      currentMarkerIndex += 1;
      prevMarkerIndex = currentMarkerIndex - 1;
    }, 2000)
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
  mapDataLoaded: PropTypes.func.isRequired,
  mapFinishedLoading: PropTypes.bool.isRequired
}

export default MapContainer;
