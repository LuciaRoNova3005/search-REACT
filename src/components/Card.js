import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article className="card">
      <img src={props.img} alt={props.name} className="" />
      <h2 className="">{props.name}</h2>
      <p className="">{props.species}</p>
      <Link to={`/character/${props.id}`}>Más información </Link>
    </article>
  );
}

export default Card;
