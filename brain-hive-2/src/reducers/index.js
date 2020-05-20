import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import addPostReducer from './addPostReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  //combineReducers is one object that gives each reducer a key
  posts: postsReducer,
  newPost: addPostReducer,
  search: searchReducer,
});
