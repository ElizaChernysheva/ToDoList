import { initialState } from './initialState';
import { ADD_TODO, TOGGLE_STATUS } from './actionTypes';

// eslint-disable-next-line default-param-last
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            ...action.payload,
            status: false,
          },
        ],
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, status: !todo.status };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
