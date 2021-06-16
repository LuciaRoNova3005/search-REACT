import React from "react";
import Card from "./Card";

const CharactersList = (props) => {
  const charactersElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
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
      <ul className="">{charactersElements}</ul>
    </section>
  );
};

export default CharactersList;
