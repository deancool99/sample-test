import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CalendarControl from 'Controls/calendar/calendar-GiFoTung';
import {setAlertData} from './action';
const initDate = new Date(2016,3,1);
class Calendar extends Component {
  constructor(props){
    super(props);
   let initState = {
          nowYear: initDate.getFullYear(), //2016
          nowMonth: initDate.getMonth(), //4
          nowDay: initDate.getDate(), //22
          nowMonthTitle: '',
          nowTotalDays: []
    };
    props.dispatch(setAlertData(initState));
  }
  setAlertData(action){
    this.props.dispatch(setAlertData(action));
  }
  render() {
    const self = this,
          props = self.props,
          state = props.state;
    return (
        <div className='container'>
          <CalendarControl
          initDate = {initDate}
          loading={state.loading}
          alertDate={state.calendarAlert}
          setAlertData={self.setAlertData.bind(self)}/>
        </div>
    );
  }
}
Calendar.propTypes = {
  data:PropTypes.object,
  dispatch:PropTypes.func
};
function mapStateToProps(state) {
  return {
    state: state.calendarReducer
  };
}
export default connect(mapStateToProps)(Calendar);
