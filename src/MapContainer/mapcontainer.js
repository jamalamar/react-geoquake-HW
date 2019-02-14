import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.2682,
      lng: -97.74295
    },
    zoom: 0
  };

  render() {

  	const quakesComposed = this.props.earthquakes.map((item, index)=> {
			return (
	      	  <Marker key={index}
	            lat={item.geometry.coordinates[1]}
	            lng={item.geometry.coordinates[0]}
	            text={item.properties.title}
				/>	
			)
		})

    return (
      // Important! Always set the container height explicitly
      <div style={{ height:'100vh', width: '100%' }}>
        <GoogleMapReact 
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {quakesComposed}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;




// import React, { Component } from 'react';


// class MapContainer extends Component{

// 	state = {
// 		map: []
// 	}

// getMap = async () => {
// 	try{
// 		const map = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBz9dwKTXl30sQaR_ibacOkVZGMHccY194&callback=initMap');
// 		const mapJson = await map.json();
// 			this.setState({
// 				map: mapJson
// 			});
// 			return mapJson;
	
// 	}catch (err) {
//         console.log(err, 'error in catch block')
//         return err
// 		}
// 	}

// 	componentDidMount(){
//       this.getMap()
//       .then((data) => console.log(data, ' from Maps API'));
//     }

// 	render(){
// 		return(
// 			<h1>Map yes yes eys eys</h1>
// 			)
// 	}
// }


// export default MapContainer;