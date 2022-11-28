import axios from 'axios';

export const addMaterial = async (searchQuery, page) => {
  const response = await axios(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=30239587-3f20dad8b68c1db6bb7cff5e0&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
};

export const getMaterials = async (searchQuery, page) => {
  const response = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=30239587-3f20dad8b68c1db6bb7cff5e0&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
};