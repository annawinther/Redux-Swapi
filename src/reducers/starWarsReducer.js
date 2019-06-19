import * as types from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING):
      return {
          ...state,
          isFetching: true,
          error: '',
      };
    case (types.SUCCESS):
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: '',
      };
    case (types.FAILURE):
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
