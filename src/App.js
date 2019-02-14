import React, { Component } from 'react';
import EarthquakeContainer from './EarthquakeContainer/earthquakecontainer.js'
import MapContainer from './MapContainer/mapcontainer.js'


class App extends Component {
  state = {
    earthquakes: []

  }

getEarthquakes = async () => {
  try{
    const earthquakes = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02');
    const earthquakesJson = await earthquakes.json();
      this.setState({
        earthquakes: earthquakesJson.features
      });
      return earthquakesJson;
  
  }catch (err) {
        console.log(err, 'error in catch block')
        return err
    }
  }

  componentDidMount(){
      this.getEarthquakes()
      .then((data) => console.log(data, ' from Earthquakes API'));
    }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer earthquakes={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeContainer earthquakes={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
