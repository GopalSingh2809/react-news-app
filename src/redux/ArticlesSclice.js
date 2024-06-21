import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '6f082c09a1d543c4a6f1e62e402ba96a';
const API_URL = `https://newsapi.org/v2/top-headlines`;

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (category, { getState }) => {
  const { currentPage } = getState().articles;
  const response = await axios.get(`${API_URL}?country=in&apiKey=${API_KEY}&category=${category}&page=${currentPage}`);
  return response.data;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    category: 'general',
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage, setCategory } = articlesSlice.actions;
export default articlesSlice.reducer;