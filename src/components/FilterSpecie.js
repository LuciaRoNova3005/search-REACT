import React from "react";
const FilterSpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <div className="form__container">
      <label className="form__specie" htmlFor="specie">
        Tipo de especie
      </label>
      <select
        className="form__types"
        name="specie"
        id="specie"
        onChange={handleChange}
        value={props.filterSpecies}
      >
        <option value="">Todas</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alienígena</option>
      </select>
    </div>
  );
};

export default FilterSpecie;
