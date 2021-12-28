import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const getSpecies = () => {
    const speciesType = props.species;
    if (speciesType === "Alien") {
      return "fab fa-reddit-alien";
    } else {
      return "fas fa-user-alt";
    }
  };

  return (
    <article className="cardSingle">
      <Link className="link" to={`/character/${props.id}`}>
        <img
          className="link list__card__img"
          src={props.img}
          alt={props.name}
        />
      </Link>
      <h2 className="cardTittle">{props.name}</h2>
      <i className={`${getSpecies()}`}></i>
      {props.species}
      <div className="information">
        <Link className="link" to={`/character/${props.id}`}>
          Más información <i className="icon fas fa-chevron-right"></i>
        </Link>
      </div>
    </article>
  );
}

export default Card;
