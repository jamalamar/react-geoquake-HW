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

	render(){

		const quakesComposed = this.state.earthquakes.map((item, index)=> {
			return (
				<div key={this.index}>
				<li>{item.properties.title}</li>
				</div>
			)
		})

		return(
			<ul>{quakesComposed}</ul>
			)
	}
}


export default EarthquakeContainer;