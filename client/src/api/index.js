import axios from 'axios';

const url = 'http://localhost:5000/characters';

export const fetchCharacters = () => axios.get(url);
export const createCharacter = (newPost) => axios.post(url, newPost);
export const deleteCharacter = (id) => axios.delete(`${url}/${id}`);
export const calculateLevel = (id) => axios.patch(`${url}/${id}/calculateLevel`);
export const updateCharacter = (id, updatedCharacter) => axios.patch(`${url}/${id}`, updatedCharacter);