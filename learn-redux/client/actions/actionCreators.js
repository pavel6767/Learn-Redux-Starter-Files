// types

export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

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
