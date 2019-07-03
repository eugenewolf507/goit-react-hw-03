import axios from 'axios';

const API_KEY = '12847803-cdf3f3013dcee3c78b7ed9bc8';
const API_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

export const fetchImages = (searchQuery, pageNumber = 1, itemsPerPage = 3) =>
  axios.get(
    `${API_URL}${searchQuery}&page=${pageNumber}&per_page=${itemsPerPage}&key=${API_KEY}`,
  );

export const dummy = () => {};
