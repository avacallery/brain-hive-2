import { CHANGE_QUERY } from '../actions/types';
import posts from '../mock/posts';

const INITIAL_STORE = {
  list: [...posts],
  query: '',
  loading: false,
  errors: {},
};

export default (store = INITIAL_STORE, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...store,
        //this is how we send the action (payload)
        query: action.payload.query,
        list: action.payload.list,
      };
    //every reducer has to send an object of some kind (state) to keep track of the changes
    default:
      return store;
  }
};
