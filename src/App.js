import React, { Component } from 'react';
import EarthquakeContainer from './EarthquakeContainer/earthquakecontainer.js'
import MapContainer from './MapContainer/mapcontainer.js'


class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeContainer />
        </div>
      </div>
    );
  }
}

export default App;
