import React from "react";
import "./data.scss";
import { useContext } from "react";
import { ContextProvider } from "../context/AddressContext";
const Data = () => {
  const { currentIp } = useContext(ContextProvider);
  return (
    currentIp.ip && (
      <div className="data">
        <div className="data_column">
          <span className="data_name">ip address</span>
          <div className="data_text">{currentIp.ip}</div>
        </div>
        <div className="data_column">
          <span className="data_name">location</span>
          <div className="data_text">{currentIp.country}</div>
        </div>
        <div className="data_column">
          <span className="data_name">timezone</span>
          <div className="data_text">UTC {currentIp.timezone}</div>
        </div>
        <div className="data_column">
          <span className="data_name"> isp</span>
          <div className="data_text">{currentIp.isp}</div>
        </div>
      </div>
    )
  );
};

export default Data;
