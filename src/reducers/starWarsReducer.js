import * as types from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING):
      return {
          ...state,
          fetching: true,
          error: null,
      };
    case (types.SUCCESS):
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null,
      };
    case (types.FETCHING_FAILURE):
      return {
        ...state,
        error: action.payload,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
