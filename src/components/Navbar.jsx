import React from 'react'
import styled from 'styled-components'
import CategoryFilter from './CategoryFilter';


const Nav=styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 40%;
    align-items: center;
    background-color: #000;
     /* Search bar for mobiles devices */
     @media (min-width: 320px) and (max-width: 576px) {
      display: flex;
      justify-content: center;
      gap: 50px;
      align-items: center;
      width: 100%;
    }
    /* Search bar for ipad and tablets*/
    @media (min-width: 576px) and (max-width: 1024px) {
      display: flex;
      justify-content: center;
      gap: 35%;
      align-items: center;
      width:100%;
    }
`;

const Logo=styled.div`
  margin-left: 50px;
  @media (max-width:576px){
    margin-left: 150px;
  }
`;
const Navbar = () => {
  return (
    <>
      <Nav>
          <Logo>
              <a href="/"><img style={{width:"100px", height:"90px"}} src="https://thumbs.dreamstime.com/b/news-sign-newspaper-icon-isolated-dark-background-simple-vector-logo-news-sign-newspaper-icon-isolated-dark-background-195402693.jpg" alt="Logo" /></a>
          </Logo>
          <CategoryFilter/>
      </Nav>
    </>
    
    
  )
}
export default Navbar;