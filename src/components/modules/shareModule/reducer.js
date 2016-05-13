import data from './data.json';
import assign from 'object-assign';
let initState = data;
import {CHAT_ENTER} from './action';
export default function counter(state = initState, action) {
  switch (action.type) {
    case CHAT_ENTER:
      return assign({}, state, {});
    default:
      return state;
  }
}
