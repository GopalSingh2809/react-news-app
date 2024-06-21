import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/ArticlesSclice';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, currentPage } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(category));
  }, [dispatch, category, currentPage]);

  return (
    <div>
      <Navbar/>
      <Search/>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
      <Pagination />
    </div>
  );
};

export default HomePage;
