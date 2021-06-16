import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">Volver</Link>
      <section>
        <img src={props.character.img} alt={props.name} />
        <h4>{props.character.name}</h4>
        <ul>
          <li>Status: {props.character.status}</li>
          <li>Species: {props.character.species}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episode: {props.character.episode}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
