import L from 'leaflet';

const Map = (function() {
  let map;

  const createMap = function() {
     map = L.map('map').setView([51.505, -0.09], 13);
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
     return map;
  }

  return {
    getMap: function() {
      if (!map) {
        map = createMap('map')
      }
      return map
    }
  }
})()

export default Map