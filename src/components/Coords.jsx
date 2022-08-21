import React, {useState} from 'react';

const Coords = () => {
  const [geoloc, setGeoloc] = useState('navigatons');

  async function navigate() {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
      accuracy: pos.coords.accuracy,
      altitude: pos.coords.altitude,
      heading: pos.coords.heading,
      speed: pos.coords.speed,
      timestamp: pos.coords.timestamp,
    };
  }

  navigate().then(data => {
    setGeoloc(data);
    console.log(data);
  })

const altitudeCheck = geoloc.altitude === null ? "null" : geoloc.altitude;
const headingCheck = geoloc.heading === null ? "null" : geoloc.heading;
const speedCheck = geoloc.speed === null ? "null" : geoloc.speed;
const timestampCheck = geoloc.timestamp === undefined ? "undefined" : geoloc.timestamp;

  return (
    <div>
      <p>Координаты:</p>
      <p>Accuracy: {geoloc.accuracy}</p>
      <p>Altitude: {altitudeCheck}</p>
      <p>Heading: {headingCheck}</p>
      <p>Lat: {geoloc.lat}</p>
      <p>Long: {geoloc.long}</p>
      <p>Speed: {speedCheck}</p>
      <p>Timestamp: {timestampCheck}</p>
    </div>
  );
};

export default Coords;