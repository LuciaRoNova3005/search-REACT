import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterName></FilterName>
        <FilterSpecie></FilterSpecie>
      </form>
    </section>
  );
};

export default Filters;
