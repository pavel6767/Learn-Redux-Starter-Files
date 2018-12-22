import { INCREMENT_LIKES } from '../actions/actionCreators';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      let i = action.index;
      return [
        ...state.slice(0, i),
        { ...state, likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
};

export default reducer;
