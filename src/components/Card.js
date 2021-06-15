function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="" />
      <h2 className="">{props.name}</h2>
      <p className="">{props.species}</p>
      <div className="">Más información</div>
    </div>
  );
}

export default Card;
