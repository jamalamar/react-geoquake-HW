import React, { Component } from 'react';


class EarthquakeContainer extends Component{

	state = {
		earthquakes: []
	}

getEarthquakes = async () => {
	try{
		const earthquakes = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02');
		const earthquakesJson = await earthquakes.json();
			this.setState({
				earthquakes: earthquakesJson
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

	render(){
		return(
			<h1>Earthquakes yes yes yes</h1>
			)
	}
}


export default EarthquakeContainer;