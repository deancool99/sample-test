import { CALENDER_SETDATA,CALENDER_LOADING} from './action';
import assign from 'object-assign';
let initState = {
    loading:true,
	calendarAlert:{}
};
function format(data) {
    let object = {};
    for (let i = 0; i < data.length; i++) {
        let title = data[i].date,
            alert = data[i].alert;
        object[title] = alert;
    }
    return object;
}
export default (state = initState, action) => {
    switch (action.type) {
        case CALENDER_SETDATA:
            state = assign({}, state, {calendarAlert: format(action.data)},{loading:false});
            return state;
         case CALENDER_LOADING:
            state = assign({}, state,{loading:true});
            return state;
        default:
            return state;
    }
};
