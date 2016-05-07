import React from 'react';
import Format from 'Core/format';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
const DatePickerView = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    width: React.PropTypes.string,
    onChange: React.PropTypes.func,
    defaultDate: React.PropTypes.object
  },
  dateFormat(dateTime, format) {
    format = format || 'yyyy-MM-dd';
    const dateObj = Format.newDate(dateTime);
		let result = '',
				year = dateObj.getFullYear(),
        month = dateObj.getMonth() + 1,
				day = dateObj.getDate(),
        hour = dateObj.getHours(),
        minute = dateObj.getMinutes(),
        second = dateObj.getSeconds();
    if(month < 10) {month = ('0' + month); }
		if(day < 10) {day = '0' + day; }
    if(hour < 10) {hour = '0' + hour; }
    if(minute < 10) {minute = '0' + minute; }
    if(second < 10) {second = '0' + second; }
		result = format.replace('yyyy', year).replace('MM', month).replace('dd', day).replace('hh', hour).replace('mm', minute).replace('ss', second);
		return result;
  },
  render() {
    const {
      defaultDate,
      className,
      width,
      onChange
    } = this.props;
    let style = {border: '1px solid #ccc', borderRadius: '5px', height: '30px', display:'inline-block'};
    if(width){
      style['width'] = width;
    }
    return (
      <div style={{display: 'inline-block'}}>
        <div className={className} style={style}>
           <DatePicker
             defaultDate={defaultDate}
             formatDate={this.dateFormat}
             autoOk={true}
             textFieldStyle={{height: '30px', display: 'block', fontSize: '12px'}}
             hintText=''
             style={{height: '30px', display: 'block'}}
             underlineStyle={{display: 'none'}}
             hintStyle={{bottom: 0}}
             onChange={onChange}/>
        </div>
        <i className="material-icons" style={{display: 'none'}}>date_range</i>
      </div>
    );
  }
});
export default DatePickerView;
