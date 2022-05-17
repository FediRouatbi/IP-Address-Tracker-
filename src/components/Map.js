import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext } from "react";
import { ContextProvider } from "../context/AddressContext";
import { useRef } from "react";

import "./map.scss";
import Render from "./Render";
const Map = () => {
  const markerRef = useRef(null);
  const marker = markerRef.current;
  if (marker) {
    marker.openPopup();
  }

  const { currentIp } = useContext(ContextProvider);
  const position = [currentIp.lat, currentIp.lng];

  return (
    <main id="map">
      <MapContainer center={position} zoom={-5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentIp.country && (
          <Marker ref={markerRef} position={position}>
            (
            <Popup>
              <div>Hello</div> you are currently at {currentIp.country},
              {currentIp.city}
            </Popup>
            )
          </Marker>
        )}

        <Render coords={position} />
      </MapContainer>
    </main>
  );
};

export default Map;
