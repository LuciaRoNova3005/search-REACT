function PokemonFav(props) {
  return (
    <ul className="card" key={props.key} id={props.id}>
      <li>
        <img className="image" src={props.img} alt={props.name}></img>
      </li>

      <li className="tittle">{props.name}</li>

      <ul className="types">
        {props.types.map((element, index) => (
          <li className="text">
            {element} key={index}
          </li>
        ))}
      </ul>
    </ul>
  );
}

export default PokemonFav;
