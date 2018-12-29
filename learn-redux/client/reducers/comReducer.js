import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actionCreators';

const postComments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    default:
      return state;
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log('state is :: ', state);
      if (typeof action.postId !== 'undefined') {
        //   return {
        //     ...state,
        //     [action.postId]: postComments(state[action.postId], action)
        //   };
        // }
        return {
          ...state,
          [action.postId]: [
            ...state[action.postId],
            {
              text: action.comment,
              user: action.author
            }
          ]
        };
      }
    case REMOVE_COMMENT:
      console.log('in reducer :: ', action);
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId].slice(0, action.index),
          ...state[action.postId].slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
