function Characters(props) {
  return (
    <ul className="card" id={props.id} onClick={props.handleFav}>
      <li>
        <img className="image" src={props.img} alt={props.name}></img>
      </li>

      <li className="tittle">{props.name}</li>
    </ul>
  );
}

export default Characters;
