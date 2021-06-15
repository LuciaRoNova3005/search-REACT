import React from "react";
import Characters from "./Characters";

const CharactersList = (props) => {
  const charactersElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Characters character={character} />
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
