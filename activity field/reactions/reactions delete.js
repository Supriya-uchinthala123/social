// ReactionApi.js
import axios from 'axios';

const API_URL = 'http://your-api-url';

export const getReactions = async () => {
  const response = await axios.get(`${API_URL}/reactions`);
  return response.data;
};

export const addReaction = async (reaction) => {
  const response = await axios.post(`${API_URL}/reactions`, reaction);
  return response.data;
};

export const editReaction = async (reactionId, reaction) => {
  const response = await axios.put(`${API_URL}/reactions/${reactionId}`, reaction);
  return response.data;
};

export const deleteReaction = async (reactionId) => {
  await axios.delete(`${API_URL}/reactions/${reactionId}`);
};

export const searchReactions = async (term) => {
  const response = await axios.get(`${API_URL}/reactions/search?term=${term}`);
  return response.data;
};

export const getFilteredReactions = async (term) => {
  const response = await axios.get(`${API_URL}/reactions/filter?term=${term}`);
  return response.data;
};
