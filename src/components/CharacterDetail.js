import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getStatus = () => {
    const speciesStatus = props.character.status;
    if (speciesStatus === "Alive") {
      return "fas fa-thumbs-up";
    } else {
      return "fas fa-skull-crossbones";
    }
  };
  return (
    <div>
      <Link to="/">Volver</Link>
      <section>
        <img src={props.character.img} alt={props.name} />
        <h4>{props.character.name}</h4>
        <ul>
          <i className={`${getStatus()}`}>{props.character.status}</i>
          <li>Origen: {props.character.origin}</li>
          <li>Episode: {props.character.episode}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
