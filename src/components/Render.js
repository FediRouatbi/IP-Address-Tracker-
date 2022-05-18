import { useMap } from "react-leaflet";

const Render = ({ coords }) => {
  const map = useMap();
  map.setView(coords, coords.includes(0) ? 2 : 12);
  // map.panTo(coords, coords.includes(0) ? 2 : 12);
  return null;
};

export default Render;
