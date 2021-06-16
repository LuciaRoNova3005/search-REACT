const FilterSpecie = () => {
  return (
    <>
      <label className="" htmlFor="specie">
        Especie
      </label>
      <select className="" name="specie" id="specie">
        <option value="all">Todos</option>
        <option value="human">Humano</option>
        <option value="alien">Alienígena</option>
      </select>
    </>
  );
};

export default FilterSpecie;
