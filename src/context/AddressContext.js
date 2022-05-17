import React, { createContext, useState } from "react";
export const ContextProvider = createContext();
const URL =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_jkiKfvbvhAHKypMhlRRCzAXNlzmsm&ipAddress=";
const AddressContext = ({ children }) => {
  const [value, setValue] = useState("");
  const [currentIp, setCurrentIp] = useState({ lat: 0, lng: 0 });
  const inputObserver = (e) => {
    setValue(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(URL + value);
      if (!response.ok)
        throw new Error(`Error on getting data ! (${response.status})`);

      const data = await response.json();

      setCurrentIp({
        country: data.location.country,
        city: data.location.city,
        timezone: data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng,
        ip: data.ip,
        isp: data.isp,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContextProvider.Provider
      value={{ value, inputObserver, getData, currentIp }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AddressContext;
