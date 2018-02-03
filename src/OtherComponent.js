import React from 'react';
import L from 'leaflet';
import Map from './leaflet';

const OtherComponent = () => {
  const sameMap = Map.getMap() // singleton already instantiated, gets the instance
  const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(sameMap);
  return (
    <div>Same Map</div>
  )
}

export default OtherComponent
