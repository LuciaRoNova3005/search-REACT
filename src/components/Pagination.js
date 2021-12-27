import React from "react";

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => goToPage(i)}>
        {i}
      </button>
    );
  }
  return (
    <div className="test">
      <button onClick={prevPage}>Previous</button>

      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
