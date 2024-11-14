import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      if (action.payload.changedType || action.payload.colors) {
        const { color, changedType } = action.payload;
        switch (changedType) {
          case "added":
            return {
              ...state,
              colors: [...state.colors, color],
            };

          case "remove":
            return {
              ...state,
              colors: state.colors.filter((existing) => existing !== color),
            };

          default:
            return state;
        }
      }
      return state;
    default:
      return state;
  }
};

export default filterReducer;
