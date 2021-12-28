import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getStatus = () => {
    const speciesStatus = props.character.status;
    if (speciesStatus === "Dead") {
      return "fas fa-skull-crossbones";
    } else if (speciesStatus === "Alive") {
      return "fas fa-heart";
    } else {
      return "fas fa-question";
    }
  };
  return (
    <div className="carhacterDetail">
      <Link to="/" className="link">
        <i className="icon fas fa-chevron-left"></i>
        Volver
      </Link>
      <section className="detail">
        <img
          className="detail__img"
          src={props.character.img}
          alt={props.name}
        />
        <h2 className="detail__title2">{props.character.name}</h2>
        <ul className="detail__inform">
          <li className="detail__inform__text">
            <i className={`icon ${getStatus()}`}> </i>
            {props.character.status}
          </li>
          <li className="detail__inform__text">
            Origen: {props.character.origin}
          </li>
          <li className="detail__inform__text">
            Episode: {props.character.episode}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
