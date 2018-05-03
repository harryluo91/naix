import React, { Component } from 'react';
// import { Route, Link, Redirect } from "react-router-dom";

const MapMarker = function(center, sensorId) {
  this._center = center;
  this._length = 44;
  this._sensorId = sensorId;
}

MapMarker.prototype = new window.BMap.Overlay();

MapMarker.prototype.initialize = function(map) {
  this._map = map;
  let template = document.createElement('template');
  template.innerHTML = `
    <div class="map-marker">
      <div class="pin non-active"></div>
    </div>
  `;
  let div = template.content.firstElementChild;
  div.style.position = 'absolute';
  map.getPanes().markerPane.appendChild(div);
  this._div = div;
  return div;
}

MapMarker.prototype.draw = function() {
  let position = this._map.pointToOverlayPixel(this._center);    
  this._div.style.left = position.x - this._length / 2 + "px";    
  this._div.style.top = position.y - this._length / 2 + "px";
}

MapMarker.prototype.setActive = function() {
  const pinElement = this._div.getElementsByClassName('pin')[0];
  pinElement.className = "pin active";
  let template = document.createElement('template');
  template.innerHTML = '<div class="pulse"></div>';
  let pulseElement = template.content.firstElementChild;
  this._div.appendChild(pulseElement);
}

MapMarker.prototype.setNonActive = function() {
  const pinElement = this._div.getElementsByClassName('pin')[0];
  pinElement.className = "pin non-active";
  let pulseElement = this._div.lastElementChild;
  this._div.removeChild(pulseElement);
}

MapMarker.prototype.sensorId = function() {
  return this._sensorId;
}

export {MapMarker};
