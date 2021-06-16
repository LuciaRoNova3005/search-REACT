import React from "react";

const CharacterNotFound = (props) => {
  return (
    <div>
      <section>
        <h4>No hay ningún personaje que coincida con tu búsqueda</h4>
        <img
          src="https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif"
          alt="Rick"
        />
      </section>
    </div>
  );
};

export default CharacterNotFound;
