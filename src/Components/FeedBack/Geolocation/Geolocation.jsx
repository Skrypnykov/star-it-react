import React from "react";
import classes from "./Geolocation.module.css";
import { geolocated } from "react-geolocated";

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="content-wrapper">
        <div className={classes.location}>
          <p>
            lat: <span>{this.props.coords.latitude}</span>
          </p>
          <p>
            long: <span>{this.props.coords.longitude}</span>
          </p>
        </div>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geolocation);
