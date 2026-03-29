import React, { useEffect, useState } from "react";

const Pagination = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  const [start, setStart] = useState(1);
  const [curPage, setCurPage] = useState(page);
  const pageLength =
    totalPages < 5 ? (totalPages <= 1 ? 1 : totalPages - 1) : 5;

  useEffect(() => {
    if (curPage === start + pageLength) setStart((prev) => prev + pageLength);
    if (curPage < start) setStart((prev) => prev - pageLength);
  }, [curPage, pageLength, start]);

  const handlePrevPage = () => {
    if (curPage === 1) return;
    setPage(curPage - 1);
    setCurPage(curPage - 1);
  };

  const handleNextPage = () => {
    if (curPage === totalPages) return;
    setPage(curPage + 1);
    setCurPage(curPage + 1);
  };

  const handleCurPage = (value) => {
    setPage(value);
    setCurPage(value);
  };

  return (
    <>
      <div className="pagination">
        <button
          className="page"
          onClick={() => {
            handlePrevPage();
          }}
        >
          &lt;
        </button>

        {Array(pageLength)
          .fill()
          .map((v, i) => {
            const p = i + start;
            return (
              <>
                {start + i <= totalPages && (
                  <button
                    key={`page-${p}`}
                    onClick={() => {
                      handleCurPage(p);
                    }}
                    className={curPage === p ? "page active" : "page"}
                  >
                    {p}
                  </button>
                )}
              </>
            );
          })}

        <button
          className="page"
          onClick={() => {
            handleNextPage();
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
