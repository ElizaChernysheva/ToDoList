import { ADD_TODO, TOGGLE_STATUS } from './actionTypes';

export const addToDo = (value) => ({
  type: ADD_TODO,
  payload: value,
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: id,
});
