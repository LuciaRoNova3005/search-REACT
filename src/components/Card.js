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
    <article className="card">
      <img src={props.img} alt={props.name} className="" />
      <h2 className="">{props.name}</h2>
      <i className={`${getSpecies()}`}></i>
      {props.species}
      <Link to={`/character/${props.id}`}>Más información </Link>
    </article>
  );
}

export default Card;
