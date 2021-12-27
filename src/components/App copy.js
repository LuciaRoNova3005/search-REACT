import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Logo from "../img/Logo.png";
import ls from "../Services/local-storage";
import getApiData from "../Services/Api";
import CharactersList from "../components/CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacternotFound";
import { Link } from "react-router-dom";

const App = () => {
  /*Un array vacío para definir el estado inicial
   pasa una key y un valor defaulft*/
  const [characters, setcharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );
  /* Reset */
  const handleReset = () => {
    setFilterName("");
    setFilterSpecies("");
  };
  const renderCharacterDetail = (routerProps) => {
    const routerId = routerProps.match.params.Id;

    const characterFound = characters.find(
      (element) => element.id === parseInt(routerId)
    );

    if (characterFound) {
      return <CharacterDetail character={characterFound} />;
    } else {
      return <CharacterNotFound></CharacterNotFound>;
    }
  };

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
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [characters, filterName, filterSpecies]);
  /*Este Useeffect se ejecuta cuando characters cambia y lo guarda en local*/

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };
  /* Data un parametro x que se le pasa a la función para que te recoja los value */

  const filtercharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecies === "") {
        return true;
      } else {
        return character.species === filterSpecies;
      }
    });

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo Rick and morty"></img>
          </Link>
        </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              handleReset={handleReset}
              handleFilter={handleFilter}
              filterName={filterName}
              filterSpecies={filterSpecies}
            ></Filters>
            <CharactersList characters={filtercharacters}></CharactersList>
          </Route>
          <Route path="/character/:Id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <footer className="footer">
        <small> Lucía Rodríguez Nova </small>
        <img
          className="img__logo"
          src="./rickandmorty.ico"
          alt="Logo Rick and morty"
        ></img>
      </footer>
    </>
  );
};

export default App;
