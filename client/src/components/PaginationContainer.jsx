import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { generateBtns } from "../utils/ArrayBtns";
import Wrapper from "../assets/Wrappers/PaginationWrapper";
import { useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = ({ data }) => {
  const { currentPage, pages, count } = data;
  const btns = generateBtns(data.pages);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const paginationQuery = (pageNum) => {
    // if (pageNum && search) {
    //   navigate(`${pathname}/${search}&page=${pageNum}`);
    // }
    // if (pageNum && !search) {
    //   navigate(`${pathname}?page=${pageNum}`);
    // }
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const addBtn = ({ pageNumber, activeBtn }) => {
    return (
      <button
        className={`btn ${activeBtn && "active"}`}
        key={pageNumber}
        onClick={() => paginationQuery(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };
  const renderBtns = () => {
    const pageBtns = [];
    // first page
    pageBtns.push(addBtn({ pageNumber: 1, activeBtn: currentPage === 1 }));
    // dots
    if (currentPage > 3) {
      pageBtns.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }
    //before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageBtns.push(addBtn({ pageNumber: currentPage - 1, activeBtn: false }));
    }
    ///current page
    if (currentPage !== 1 && currentPage !== pages) {
      pageBtns.push(addBtn({ pageNumber: currentPage, activeBtn: true }));
    }
    //after current page
    if (currentPage !== pages && currentPage !== pages - 1) {
      pageBtns.push(addBtn({ pageNumber: currentPage + 1, activeBtn: false }));
    }
    if (currentPage < pages - 2) {
      pageBtns.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }
    // last page
    pageBtns.push(
      addBtn({ pageNumber: pages, activeBtn: currentPage === pages })
    );
    return pageBtns;
  };
  return (
    <>
      <Wrapper>
        <button
          className="btn prev-btn"
          onClick={() => {
            let pagePrev = Number(currentPage) - 1;
            if (currentPage === 1) pagePrev = 1;
            paginationQuery(pagePrev);
          }}
        >
          <FaChevronLeft />
          Prev
        </button>
        <div className="btns-container">{renderBtns()}</div>
        <button
          className="btn next-btn"
          onClick={() => {
            let pageNext = Number(currentPage) + 1;
            if (currentPage === pages) pageNext = pages;
            paginationQuery(pageNext);
          }}
        >
          Next
          <FaChevronRight />
        </button>
      </Wrapper>
    </>
  );
};

export default PaginationContainer;
