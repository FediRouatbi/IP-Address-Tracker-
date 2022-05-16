import React, { useContext, useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ContextProvider } from "../context/AddressContext";
function Render() {
  const { position } = useContext(ContextProvider);
  console.log(position);
  let map = L.map("map").setView(position, 8);
  map.remove();
  return (
    <div className="right-sidebar-container">
      <div id="map"></div>
    </div>
  );
}

export default Render;
