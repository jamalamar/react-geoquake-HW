import React, { Component } from 'react';


class EarthquakeContainer extends Component{
	render(){

		const quakesComposed = this.props.earthquakes.map((item, index)=> {
			return (
				<div key={this.index} id='info'>
				<li>{item.properties.title}  time:{item.properties.time}</li>
				</div>
			)
		})

		return(
			<ul>{quakesComposed}</ul>
			)
	}
}


export default EarthquakeContainer;