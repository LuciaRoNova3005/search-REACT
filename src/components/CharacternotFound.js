import React from "react";
import { Link } from "react-router-dom";

const CharacterNotFound = (props) => {
  return (
    <div>
      <Link to="/">Volver</Link>
      <section>
        <img
          src="https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif"
          alt="Rick"
        />
        <h4>No hay ningún personaje que coincida con tu búsqueda</h4>
      </section>
    </div>
  );
};

export default CharacterNotFound;
