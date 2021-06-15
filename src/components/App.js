import "../stylesheets/App.css";
import React, { useState, useEffect } from "react";
import Logo from "../img/Logo.png";
import getApiData from "../services/Api";

const App = () => {
  /*Un array vacío para definir el estado
   *  const [users, setUsers] = useState([]);*/
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      setcharacters(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="logo">
          <img src={Logo} alt="Logo Rick and morty"></img>
        </h1>
      </header>
      <main></main>
    </>
  );
};

export default App;
