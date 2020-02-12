import { CREATE_COMMENT } from "../actions/actionTypes";

export default function commentReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return [...state, action.comment];
    default:
      return state;
  }
}
