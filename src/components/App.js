import "../stylesheets/App.scss";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Logo from "../img/Logo.png";
import ls from "../Services/local-storage";
import CharactersList from "../components/CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacternotFound";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    ls.get("currentPageUrl", "https://rickandmortyapi.com/api/character?")
  );
  const [nextPageUrl, setNextPageUrl] = useState(ls.get("nextPageUrl", []));
  const [prevPageUrl, setPrevPageUrl] = useState(ls.get("prevPageUrl", []));
  const [pages, setPages] = useState(ls.get("pages", []));
  /*Un array vacío para definir el estado inicial
   pasa una key y un valor defaulft*/
  const [characters, setcharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );
  useEffect(() => {
    ls.set("pages", pages);
    ls.set("currentPageUrl", currentPageUrl);
    ls.set("nextPageUrl", nextPageUrl);
    ls.set("prevPageUrl", prevPageUrl);
    ls.set("character", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [
    currentPageUrl,
    prevPageUrl,
    nextPageUrl,
    pages,
    characters,
    filterName,
    filterSpecies,
  ]);

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
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const orderResults = data.results.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      const cleanData = orderResults.map((character) => {
        return {
          id: character.id,
          img: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });
      setcharacters(cleanData);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages);
    };
    fetchData();
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToPage(num) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
  }

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

  if (loading) return "Loading...";
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
            <Pagination
              nextPage={nextPageUrl ? nextPage : null}
              prevPage={prevPageUrl ? prevPage : null}
              goToPage={goToPage}
            />
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
