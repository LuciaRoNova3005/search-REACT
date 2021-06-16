import React from "react";
import Card from "./Card";
import CharacterNotFound from "./CharacternotFound";

const CharactersList = (props) => {
  if (props.characters.length === 0) {
    return <CharacterNotFound character={props.filterName} />;
  }
  const charactersElements = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <Card
          id={character.id}
          img={character.img}
          name={character.name}
          species={character.species}
          status={character.status}
          episode={character.episode}
          origin={character.origin}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="card-list">{charactersElements}</ul>
    </section>
  );
};

export default CharactersList;
