import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETE,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

const getTodoId = (todos) => {
  const maxId = todos.reduce((maxToId, todo) => Math.max(todo.id, maxToId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: getTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });

    case COLORSELECTED:
      if (action.payload.todoId && action.payload.color) {
        const { todoId, color } = action.payload;
        return state.map((todo) => {
          if (todo.id !== todoId) {
            return todo;
          } else {
            return {
              ...todo,
              color: color,
            };
          }
        });
      }
      return state;

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
