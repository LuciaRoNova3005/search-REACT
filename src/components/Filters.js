import React from "react";
import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";

const Filters = (props) => {
  return (
    <section>
      <form>
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
