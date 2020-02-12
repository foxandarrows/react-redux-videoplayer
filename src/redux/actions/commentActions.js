import { CREATE_COMMENT } from "./actionTypes";

// Action Creators
export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    comment
  };
}
