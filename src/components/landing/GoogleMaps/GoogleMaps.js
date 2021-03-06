import React, { Component, Fragment } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { storeStatics } from "../../../config";
import { GOOGLE_MAPS_API_KEY } from "../../../config";
class GoogleMaps extends Component {
	onMarkerClick = () => {};
	render() {
		const style = {
			height: "300px"
		};
		return (
			<div className="bg-red" style={{ height: "300px" }}>
				<Map
					google={this.props.google}
					style={style}
					initialCenter={{
						lat: storeStatics.location.lat,
						lng: storeStatics.location.lg
					}}
					zoom={16}
					onClick={this.onMapClicked}
				>
					<Marker onClick={this.onMarkerClick} name={"Current location"} />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: GOOGLE_MAPS_API_KEY
})(GoogleMaps);
