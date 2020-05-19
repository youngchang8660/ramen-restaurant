import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Reservation from "./Components/Reservation/Reservation";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const App = (props) => {
  const containerStyle = {
    width: "800px",
    height: "800px",
  };
  const [isMap, setIsMap] = useState(false);
  const toggle = () => setIsMap(!isMap);

  console.log(isMap);

  return (
    <div>
      <Header />
      <Home />
      <Menu />
      <Reservation />
      <About />
      {!isMap ? (
        <footer className="app-footer">
          <div className="footer-container">
            <div className="visit-container">
              <h1>VISIT US</h1>
              <h2>Address</h2>
              <h4>1 Chome-7-1 Kyobashi, Chuo City, Tokyo 104-0031, Japan</h4>
              <h4>〒104-0031 東京都中央区京橋１丁目７−1</h4>
              <h2>Contact</h2>
              <h4>+81 123-456-789</h4>
              <button className='view-map-button' onClick={toggle}>View Map</button>
            </div>
          </div>
        </footer>
      ) : (
        <footer className='map-footer'>
          <div className="map">
          <Map
            containerStyle={containerStyle}
            google={props.google}
            zoom={14}
            initialCenter={{
              lat: 35.6804,
              lng: 139.769,
            }}
          >
            <Marker onClick={props.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
        </footer>
      )}
    </div>
  );
};

// export default App

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdMBNLfEOfAxljFF61_VMobO1rafB4J84",
})(App);
