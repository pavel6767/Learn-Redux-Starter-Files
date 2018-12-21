// types

const INCREMENT_LIKES = 'INCREMENT_LIKES';
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';

// increment
export const increment = index => ({
  type: INCREMENT_LIKES,
  index
});
// add comment
export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment
});
// remove comment
export const removeComment = (postId, index) => ({
  type: REMOVE_COMMENT,
  postId,
  index
});
