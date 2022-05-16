import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./search.scss";
import { ContextProvider } from "../context/AddressContext";
const Search = () => {
  const { value, inputObserver, getData } = useContext(ContextProvider);

  return (
    <header className="search">
      <div className="search_name">IP Adress Tracker</div>
      <div className="search_bar">
        <input
          className="search_bar-input"
          type="text"
          value={value}
          onChange={(e) => inputObserver(e)}
        />
        <span className="search_bar-icon" onClick={() => getData()}>
          <FaArrowRight size={20} />
        </span>
      </div>
    </header>
  );
};

export default Search;
