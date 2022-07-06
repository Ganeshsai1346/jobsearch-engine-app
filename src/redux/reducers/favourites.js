/** @format */

import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favourites: [...state.favourites, payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favourites: state.favourites.filter((company) => company !== payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
