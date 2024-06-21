import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './ArticlesSclice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
