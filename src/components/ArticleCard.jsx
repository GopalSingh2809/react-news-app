import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleDiv=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:25px;
`
const ArticleCardDiv=styled.div`
  background-color: #000;
  height: 35%;
  width: 70%;
  border: 10px solid lightgrey;
  border-radius: 20px;
  padding: 10px;
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  outline: none ;
`
const ArticleCardImg=styled.img`
   padding: 10px;
   width: 100%;
   height: 40%;
   border-radius: 20px;
   color: #ffffff;
`
const Heading=styled.h3`
    color: #ffffff;
`
const SubHeading=styled.p`
  color: #ffffff;
`
const ArticleCard = ({ article }) => {
  return (
    <ArticleDiv>
      <ArticleCardDiv>
        <ArticleCardImg src={article.urlToImage} alt={article.title} />
        <Heading><Link to={article.url}>{article.title}</Link></Heading>
        <SubHeading>{article.description}</SubHeading>
      </ArticleCardDiv>
    </ArticleDiv>
  );
};

export default ArticleCard;
