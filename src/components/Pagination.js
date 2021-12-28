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
    <div className="pagination">
      <button className="pagination__button" onClick={prevPage}>
        <i className="icon fas fa-arrow-left"></i>
        Previous
      </button>

      <button className="pagination__button" onClick={nextPage}>
        Next
        <i className="icon fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
