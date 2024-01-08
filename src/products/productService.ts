import axios from 'axios';

const API_BASE_URL = "https://jsonplaceholder.typicode.com/"

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchData = async () => {
  return await apiService.get('/comments')
  .then(response => response.data)
  .catch(error => console.error('Error fetching data:', error));
};