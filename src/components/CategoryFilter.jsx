import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/ArticlesSclice';
import styled from 'styled-components';

const CategoryDiv=styled.div`
  
  @media (min-width: 360px) and (max-width:576px) {
    margin-right: 105px;
  }
  @media (min-width: 576px) and (max-width: 1024) {
      margin-right: 100px;
    }
`
const Category=styled.select`
    height: 40px;
    width: 150px;
    outline: none;
    padding-left:10px;
    border: 2px solid lightgray;
    border-radius:30px;
    margin: 20px 0px 25px 30px;
    @media (max-width:576px) {
      margin-right:60px ;
    }
`
const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <CategoryDiv>
        <Category onChange={handleCategoryChange}>
            <option value="Select Feild ...">Select Feild ...</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
            ))}
        </Category>
    </CategoryDiv>
    
  );
};

export default CategoryFilter;
