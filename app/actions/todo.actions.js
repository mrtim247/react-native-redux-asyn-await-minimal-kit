import * as types from './types';
import * as Utils from '../helpers/utils';
import Config from '../config';

export function checkTodoList(payload) {
  return {
    type: types.LIST,
    payload: [
    {
    	first: 'tim'
    }
    ]
  }
}
