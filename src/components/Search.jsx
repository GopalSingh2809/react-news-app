import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const SearchConatiner=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin:30px 20px 30px 0px;
`
const Searchbar=styled.form`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Input=styled.input`
    width: 350px;
    margin-right:10px ;
    padding: 8px;
    border: 2px solid lightgray;
    border-radius: 20px;
    /* Search bar for mobiles devices */
    @media (max-width: 576px) {
      width: 200px;
    }
    /* Search bar for ipad and tablets*/
    @media (min-width: 576px) and (max-width: 1024) {
      width: 250px;
    }
`
const Btn=styled.button`
    width: 100px;
    padding: 6px;
    border: 2px solid green;
    background-color: greenyellow;
    border-radius: 20px;
`

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=6f082c09a1d543c4a6f1e62e402ba96a`
      );
      setArticles(response.data.articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchConatiner>
      <Searchbar onSubmit={handleSearch}>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for articles..."
        />
        <Btn type="submit">Search</Btn>
      </Searchbar>
      <div>
        {loading && <div style={{color:"white"}}>Loading...</div>}
        {error && <div style={{color:"white"}}>{error}</div>}
        <div>
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </div>
      
    </SearchConatiner>
  );
};

export default Search;
