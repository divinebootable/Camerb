import React from 'react'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Address extends React.Component{
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 12
	};

	render(){
		return(
			<div className="row" style={{ height: '75vh', width: '100%' }}>
				<GoogleMapReact

          /*bootstrapURLKeys={{ key: /* YOUR KEY HERE // }}*/
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent
						lat={7.9465}
						lng={1.0232}
						text="My Marker"
					/>
				</GoogleMapReact>
			</div>
		)
	}
}


export default Address