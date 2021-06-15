const Filters = (props) => {
  return (
    <section>
      <form>
        <input
          className=""
          type="text"
          name="name"
          id="name"
          placeholder="Busca a tu personaje"
        />
        <label className="" htmlFor="specie">
          Especie
        </label>
        <select className="" name="specie" id="specie">
          <option value="all">Todos</option>
          <option value="human">Humano</option>
          <option value="alien">Alienígena</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
