import "./style.css";
import Cards from "components/Cards";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import React from "react";

const Home = ({ palletes, getPalettes }) => {
  const [filterInput, setFilterInput] = useState("");

  return (
    <div className="home">
      <div className="home-header">
        <h2>Lista de Paletas</h2>
        <div className="search-box">
          <input
            value={filterInput}
            onChange={(event) => {
              setFilterInput(event.target.value);
            }}
            type="text"
            placeholder="Buscar por sabor"
          />
          <a href="##" className="icon">
            <i className="fas fa-search">
              <BsSearch />
            </i>
          </a>
        </div>
      </div>
      <div className="home-container">
        {filterInput !== ""
          ? palletes
              .filter((element) =>
                element.sabor.toLowerCase().includes(filterInput.toLowerCase())
              )
              .map((element, index) => {
                return (
                  <Cards
                    getPalettes={getPalettes}
                    key={index}
                    palette={element}
                  />
                );
              })
          : palletes.map((element, index) => {
              return (
                <Cards
                  getPalettes={getPalettes}
                  key={index}
                  palette={element}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
