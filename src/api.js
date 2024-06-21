import axios from 'axios';

const API_KEY = '6f082c09a1d543c4a6f1e62e402ba96a';
const API_URL = `https://newsapi.org/v2/top-headlines`;

export const fetchArticles = async (category, page) => {
  const response = await axios.get(`${API_URL}?apiKey=${API_KEY}&category=${category}&page=${page}`);
  return response.data;
};
