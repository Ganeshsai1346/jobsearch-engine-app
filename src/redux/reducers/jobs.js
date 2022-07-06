/** @format */

import { ADD_JOBS } from "../actions";

const initialState = {
  fetchedJobs: [],
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_JOBS: {
      return {
        ...state,
        fetchedJobs: [...payload],
      };
    }

    default:
      return state;
  }
};

export default jobsReducer;
