import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./search.scss";
const Search = () => {
  return (
    <header className="search">
      <div className="search_name">IP Adress Tracker</div>
      <div className="search_bar">
        <input className="search_bar-input" type="text" />
        <span className="search_bar-icon">
          <FaArrowRight size={20} />
        </span>
      </div>
    </header>
  );
};

export default Search;
