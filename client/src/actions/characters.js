import { FETCH_ALL, CREATE, DELETE, UPDATE, CALCLEVEL } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCharacters = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCharacters();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCharacter = (character) => async (dispatch) => {
  try {
    const { data } = await api.createCharacter(character);

    dispatch({ type: CREATE, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCharacter = (id) => async (dispatch) => {
  try {
    await api.deleteCharacter(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCharacter = (id, character) => async (dispatch) => {
  try {
    const { data } = await api.updateCharacter(id, character);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const calculateLevel = (id) => async (dispatch) => {
  try {
    const { data } = await api.calculateLevel(id);

    dispatch({ type: CALCLEVEL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
