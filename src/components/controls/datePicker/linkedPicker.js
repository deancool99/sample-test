import React from 'react';
import Format from 'Core/format';
import DatePicker from './datePicker';
const LinkedPicker = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    defaultValue: React.PropTypes.object
  },
  getInitialState () {
    return {
      start: null,
      end: null
    };
  },
  onDateChange(type, oldDate, newDate){
    const _this = this,
    {
      onChange
    } = this.props,
    newState = {};
    newState[type] = newDate;
    this.setState(newState, function(){
      onChange(_this.state);
    });
  },
  render() {
    const {
      props,
      onDateChange
    } = this,
    {
      defaultValue
    } = props,
    {
      start,
      end
    } = defaultValue;
    return (
      <div style={{width: '150px', display: 'inline-block'}}>
        <DatePicker onChange={onDateChange.bind(null, 'start')} width='70px' defaultDate={start ? Format.newDate(start) : null}/>
        <span>~</span>
        <DatePicker onChange={onDateChange.bind(null, 'end')} width='70px' defaultDate={end ? Format.newDate(end) : null}/>
      </div>
    );
  }
});
export default LinkedPicker;
