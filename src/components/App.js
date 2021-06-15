import "../stylesheets/App.css";
import React, { useState, useEffect } from "react";
import Logo from "../img/Logo.png";
import getApiData from "../Services/Api";
import CharactersList from "../components/CharactersList";
import Filters from "./Filters";

const App = () => {
  /*Un array vacío para definir el estado inicial
   */
  const [characters, setcharacters] = useState([]);
  /*Empieza ejecutarse en la parte de montaje y es lo que hace que salga los datos
   */
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
      <main>
        <Filters></Filters>
        <CharactersList characters={characters}></CharactersList>
      </main>
    </>
  );
};

export default App;
