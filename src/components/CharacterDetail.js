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
      <section className="detail">
        <img
          className="detail__img"
          src={props.character.img}
          alt={props.name}
        />
        <h2>{props.character.name}</h2>
        <ul>
          <li>
            <i className={`${getStatus()}`}>{props.character.status}</i>
          </li>
          <li>Origen: {props.character.origin}</li>
          <li>Episode: {props.character.episode}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
