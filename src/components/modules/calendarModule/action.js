export const CALENDER_SETDATA = 'CALENDER_SETDATA';
export const CALENDER_LOADING = 'CALENDER_LOADING';
import data from './alertData/data.json';
//import axios from 'axios';
// let getData = (action)=>{
//     let data = [{
//         date: action.nowYear+'/' + (action.nowMonth + 1) + '/2',
//         alert:{
//             'title': '暫停計價日',
//             'detail': [{
//                 'title': '國內休市',
//                 'content': '暫停計價基金 : 野村中東非洲'
//             },{
//                 'title': '國外休市',
//                 'content': '暫停計價基金 : 野村中東非洲'
//             }]
//         }
//     },
//     {
//         date: action.nowYear+'/' + (action.nowMonth + 1) + '/5',
//         alert: {
//             'title': '暫停計價日',
//             'detail': [{
//                 'title': '國外休市',
//                 'content': '暫停計價基金 : 野村中東非洲'
//             }]
//         }
//     },
//     {
//         date: action.nowYear+'/' + (action.nowMonth + 1) + '/11',
//         alert: {
//             'detail': []
//         }
//     }];
//     return data;
// };
export function setAlertData(action){
    return (dispatch)=>{
        dispatch({
            type: CALENDER_LOADING
        });
        setTimeout(function(){
           
            dispatch({
            type: CALENDER_SETDATA,
            data: data[action.nowMonth]
        });
        }, 3000);
    };
}


export function loading(action){
    return {
        type: CALENDER_LOADING,
        action
    };
}
