import React, { createContext, useState } from "react";
export const ContextProvider = createContext();
const URL =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_jkiKfvbvhAHKypMhlRRCzAXNlzmsm&ipAddress=";
const AddressContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [position, setPosition] = useState([10, 0.5]);

  const inputObserver = (e) => {
    setValue(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(URL + value);
      if (!response.ok)
        throw new Error(`Error on getting data ! (${response.status})`);
      const data = await response.json();
      setData(data);
      console.log(data);
      setPosition([data.location.lat, data.location.lng]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContextProvider.Provider
      value={{ value, inputObserver, getData, position }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AddressContext;
