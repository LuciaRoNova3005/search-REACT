import React from "react";
const FilterName = (props) => {
  /*Pasamos los datos limpios al componente cuando cambia el evento (lifiting)
   */
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <input
        className=""
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        placeholder="Busca a tu personaje"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
