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
        Previous
        <i class="fas fa-arrow-left"></i>
      </button>

      <button className="pagination__button" onClick={nextPage}>
        <i class="fas fa-arrow-right"></i>
        Next
      </button>
    </div>
  );
};

export default Pagination;
