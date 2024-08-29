import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
//     iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//     shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
// });

const LocationFinder = () => {
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState([51.505, -0.09]); 
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    };

    const findLocation = () => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const lat = data[0].lat;
                    const lon = data[0].lon;
                    setCoordinates([lat, lon]);
                    setMarkerPosition([lat, lon]);
                } else {
                    alert('Location not found!');
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    const MapView = () => {
        const map = useMap();
        map.setView(coordinates, 13);
        return null;
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <h1>Find Places</h1>
            <input
                type="text"
                value={location}
                onChange={handleInputChange}
                placeholder="Enter a location name"
                style={{ padding: '8px', width: '400px', height:'60px'}}
            />
            <button onClick={findLocation} style={{ marginLeft: '10px', padding: '8px 12px' }}>
                Find Location
            </button>

            <div style={{ marginTop: '20px', height: '400px', width:'400px',  border: '2px solid red', borderradius: '25px rounded' }}>
                <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '815px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="© OpenStreetMap"
                    />
                    <MapView />
                    {markerPosition && (
                        <Marker position={markerPosition}>
                            <Popup>{location}</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default LocationFinder;