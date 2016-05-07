import data from './data.json';
import assign from 'object-assign';
let initState = {
  index:0,
  data:data
};
import {BANNER_NEXT, BANNER_PREV, BANNER_CHANGE} from './action';
export default function counter(state = initState, action) {
  switch (action.type) {
    case BANNER_NEXT:
      return assign({}, state, {index: ((state.index + 1) % state.data.length)});
    case BANNER_PREV:
      return assign({}, state, {index: ((state.index + state.data.length - 1) % state.data.length)});
    case BANNER_CHANGE:
      return assign({}, state, {index: action.index});
    default:
      return state;
  }
}
