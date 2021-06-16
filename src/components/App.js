import "../stylesheets/App.css";
import React, { useState, useEffect } from "react";
import Logo from "../img/Logo.png";
import ls from "../Services/local-storage";
import getApiData from "../Services/Api";
import CharactersList from "../components/CharactersList";
import Filters from "./Filters";

const App = () => {
  /*Un array vacío para definir el estado inicial
   pasa una key y un valor defaulft*/
  const [characters, setcharacters] = useState(ls.get("characters", []));
  /*Empieza ejecutarse en la parte de montaje y es lo que hace que salga los datos
   */
  useEffect(() => {
    /*Si el array esta vacío no accedes al locastorage
     */
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setcharacters(charactersData);
      });
    }
  }, []);
  /*Parámetro que nos indica cuando debe ejecutarse el useEffect
   */

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);
  /*Este Useeffect nos guarda en localsotrage cuando los personajes cambian,se ejecuta cuando characters cambia
   */

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
