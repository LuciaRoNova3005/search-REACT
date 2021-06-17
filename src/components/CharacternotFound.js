import React from "react";

const CharacterNotFound = (props) => {
  return (
    <div>
      <section className="characterNotFound">
        <h3 className="tittle3">
          No hay ningún personaje que coincida con tu búsqueda
        </h3>
        <img
          className="characterNotFound__img"
          src="https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif"
          alt="Rick"
        />
      </section>
    </div>
  );
};

export default CharacterNotFound;
