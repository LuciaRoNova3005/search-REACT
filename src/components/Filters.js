import React from "react";
import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        ></FilterName>
        <FilterSpecie
          handleFilter={props.handleFilter}
          value={props.filterSpecies}
        ></FilterSpecie>
      </form>
    </section>
  );
};

export default Filters;
