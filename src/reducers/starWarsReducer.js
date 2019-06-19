import * as types from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  fetched: false,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.SUCCESS):
      return (
        Object.assign(
          {}, 
          state ,
          { characters: state.characters.concat(action.payload),
            fetching: false, 
            fetched: true,
          })
      )
    case (types.FETCHING):
      return action.payload;
    case (tpes.FAILURE):
        state = action.payload;
      return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
