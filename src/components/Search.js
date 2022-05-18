import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./search.scss";
import { ContextProvider } from "../context/AddressContext";
const Search = () => {
  const { value, inputObserver, getData, error } = useContext(ContextProvider);

  return (
    <header className="search">
      <div className="search_name">IP Adress Tracker</div>
      <div className="search_bar">
        <input
          placeholder="Insert your IP address"
          className="search_bar-input"
          type="text"
          value={value}
          onKeyDown={(e) => inputObserver(e)}
          onChange={(e) => inputObserver(e)}
        />
        <span className="search_bar-icon" onClick={() => getData()}>
          <FaArrowRight size={20} />
        </span>
      </div>
      <div style={{ color: "red" }}>{error.message}</div>
    </header>
  );
};

export default Search;
