import React from "react";
import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        ></FilterName>
        <FilterSpecie
          handleFilter={props.handleFilter}
          value={props.filterSpecies}
        ></FilterSpecie>
        <button className="" onClick={props.handleReset}>
          <i className="far fa-trash-alt"></i> Reset
        </button>
      </form>
    </section>
  );
};

export default Filters;
