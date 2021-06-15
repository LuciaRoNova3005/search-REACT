import React from "react";
import PokemonFav from "./PokemonFav";
const Pokelistfav = (props) => {
  return (
    <div className="container">
      <h2>Pokemon Favoritos</h2>
      {props.dataFav.map((element) => (
        <PokemonFav
          key={element.id}
          name={element.name}
          img={element.url}
          types={element.types}
          id={element.id}
        ></PokemonFav>
      ))}
    </div>
  );
};

export default Pokelistfav;
