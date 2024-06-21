import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/ArticlesSclice';
import styled from 'styled-components';


const PaginationDiv=styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`
const PaginationBtn=styled.button`
  background-color: #3a34eb;
  border: none;
  color: #ffffff;
  width: 100px;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 20px;
`
const PaginationSpan=styled.span`
  margin-top: 5px;
  font-size: 18px;
  color: #ffffff;
`

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.articles.currentPage);

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  return (
    <PaginationDiv>
      <PaginationBtn onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </PaginationBtn>
      <PaginationSpan>Page {currentPage}</PaginationSpan>
      <PaginationBtn onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </PaginationBtn>
    </PaginationDiv>
  );
};

export default Pagination;
