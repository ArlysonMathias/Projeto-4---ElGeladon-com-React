import React from "react";
// import "./style.css";
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Buscar por nome" />
      <a href="##" className="icon">
        <i className="fas fa-search">
          <BsSearch />
        </i>
      </a>
    </div>
  );
};

export default Search;
