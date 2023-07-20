import { action_types } from "./types";

export const initialState = {
  commits: [],
  loading: false,
};

export default function octokitReducer(state = initialState, action) {
  switch (action.type) {
    case action_types.GET_COMMITS:
      return {
        ...state,
        commits: action.commits,
        loading: action.loading,
      };

    case action_types.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
}
