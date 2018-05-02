import React, { Component } from 'react';
// import { Route, Link, Redirect } from "react-router-dom";

const MapMarker = (center) => {
  this._center = center;
  this._length = 100;
}

MapMarker.prototype = new window.BMap.Overlay();

MapMarker.prototype.initialize = (map) => {
  this._map = map;
  let div = document.createElement('div');
  div.id = 'map-marker';
  div.style.position = 'absolute';
  div.style.width = this._length + "px";
  div.style.height = this._length + "px";
  div.style.background = this._color;
  map.getPanes().markerPane.appendChild(div);
  this._div = <div id="map-marker" style={{height:'100px', width: '100px'}}></div>;
  return (<div id="map-marker" style={{height:'100px', width: '100px'}}></div>);
}

MapMarker.prototype.draw = () => {
  let position = this._map.pointToOverlayPixel(this._center);    
  this._div.style.left = position.x - this._length / 2 + "px";    
  this._div.style.top = position.y - this._length / 2 + "px";
}

export {MapMarker};
