import { MapContainer, TileLayer, Popup, Marker, setView } from "react-leaflet";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../context/AddressContext";
import "./map.scss";
import Render from "./Render";

const Map = () => {
  return (
    <main id="map">
      <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Render />
      </MapContainer>
    </main>
  );
};

export default Map;
