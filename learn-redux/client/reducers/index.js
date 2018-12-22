import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './postReducer';
import comments from './comReducer';

export default combineReducers({ posts, comments, routing: routerReducer });
