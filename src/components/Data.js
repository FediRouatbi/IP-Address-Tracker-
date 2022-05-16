import React from "react";
import "./data.scss";
const Data = () => {
  return (
    <div className="data">
      <div className="data_column">
        <span className="data_name">ip address</span>
        <div className="data_text">192.2121.174.101</div>
      </div>
      <div className="data_column">
        <span className="data_name">location</span>
        <div className="data_text">tunisia</div>
      </div>
      <div className="data_column">
        <span className="data_name">timezone</span>
        <div className="data_text">UTC -05:00</div>
      </div>
      <div className="data_column">
        <span className="data_name"> isp</span>
        <div className="data_text">spaceX Starlink</div>
      </div>
    </div>
  );
};

export default Data;
