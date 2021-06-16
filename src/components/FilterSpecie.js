import React from "react";
const FilterSpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="" htmlFor="specie">
        Especie
      </label>
      <select
        className=""
        name="specie"
        id="specie"
        onChange={handleChange}
        value={props.filterSpecies}
      >
        <option value="">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alienígena</option>
      </select>
    </>
  );
};

export default FilterSpecie;
