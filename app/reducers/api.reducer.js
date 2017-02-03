import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const searchResults = createReducer({
    isLoading:true,
    payload: []
  }, {
  [types.LIST](state, action) {
    return action.payload;
  }
})
