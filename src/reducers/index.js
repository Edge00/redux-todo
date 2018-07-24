
import { combineReducers } from "redux";

import {
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(
        (item, index) =>
          index === action.index
            ? { completed: !item.completed, text: item.text }
            : item
      );
    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoReducer = combineReducers({todos, visibilityFilter});

export default todoReducer
