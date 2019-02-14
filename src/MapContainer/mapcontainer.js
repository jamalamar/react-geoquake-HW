import React, { Component } from 'react';


class MapContainer extends Component{

	state = {
		map: []
	}

getMap = async () => {
	try{
		const map = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap');
		const mapJson = await map.json();
			this.setState({
				map: mapJson
			});
			return mapJson;
	
	}catch (err) {
        console.log(err, 'error in catch block')
        return err
		}
	}

	componentDidMount(){
      this.getMap()
      .then((data) => console.log(data, ' from Maps API'));
    }

	render(){
		return(
			<h1>Map yes yes eys eys</h1>
			)
	}
}


export default MapContainer;