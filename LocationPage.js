import React, { useState, useEffect } from 'react';

const LocationPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([
    { name: 'Vending Machine 1', latitude: 51.505, longitude: -0.09, directions: 'Head straight for 200 meters, then take a right.' },
    { name: 'Vending Machine 2', latitude: 40.515, longitude: -0.10, directions: 'Go left for 1 km, then the machine will be on your right.' },
    { name: 'Vending Machine 3', latitude: 30.525, longitude: -0.11, directions: 'Walk 500 meters straight, and it will be on the left.' },
  ]);

  useEffect(() => {
    // Get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation(position.coords);
      });
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 30; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const sortedLocations = locations
    .map(location => ({
      ...location,
      distance: userLocation ? calculateDistance(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude) : null,
    }))
    .sort((a, b) => a.distance - b.distance);

  return (
    <div>
      <h1>Find Nearest Vending Machine</h1>
      {userLocation ? (
        <div className="location-list">
          {sortedLocations.map((location, index) => (
            <div key={index} className="location-card">
              <h3>{location.name}</h3>
              <p>Distance: {location.distance.toFixed(2)} km</p>
              <p>Directions: {location.directions}</p>
              <button>Get Directions</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default LocationPage;
