import { combineReducers } from 'redux';
import chatReducer from 'Modules/chatModule/reducer';
import bannerReducer from 'Modules/bannerModule/reducer';
import calendarReducer from 'Modules/calendarModule/reducer';

const reducers = combineReducers({
  bannerReducer,
  calendarReducer,
  chatReducer
});
export default reducers;
