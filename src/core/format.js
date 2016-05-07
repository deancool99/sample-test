var gmt2utc = function(dateTimeString){
  return dateTimeString.replace(' ', 'T').replace('+0000', 'Z');
};
var formater = {
  newDate: function(dateTime){
    if(typeof dateTime === 'string'){
      dateTime = gmt2utc(dateTime);
    }
    if(typeof dateTime === 'undefined'){
      return new Date();
    }else{
      return new Date(dateTime);
    }
  },
  symbolName: function(name) {
    var displayName = [name.slice(0, 3), '/', name.slice(3)].join('');
    return displayName;
  },
  price: function(num) {
    // var fNum = parseFloat(num).toFixed(5);
    if(num){
      var fNum = parseFloat(num);
    if (fNum > 1000000) {
        fNum = fNum / 1000000;
      }
      fNum = parseFloat(num).toString();
      if(fNum.indexOf('.') === -1){
        fNum += '.';
      }
      fNum += '0000000';
      fNum = fNum.substring(0, 7);
      return fNum;
    }else{
      return '';
    }
  },
  thousandComma: function(number){
    if(!number){
      return '';
    }
    let num = number.toString();
     num = num.replace(/,/g, '');
     const decimalPoint = num.indexOf('.') > -1;
     num = num.split('.');
     const pattern = /(-?\d+)(\d{3})/;
     while(pattern.test(num[0])){
      num[0] = num[0].replace(pattern, '$1,$2');
     }
     if(decimalPoint){
       num = num[0] + '.' + (num[1] || '');
     }else{
       num = num[0];
     }
     return num;
 },
  dateTime: function(dateTime, format) {
    format = format || 'yyyy-MM-dd hh:mm:ss';
    if(typeof dateTime === 'string'){
      dateTime = gmt2utc(dateTime);
    }
    var dateObj = new Date(dateTime);
    var result = '',
      year = dateObj.getFullYear(),
      month = dateObj.getMonth() + 1,
      day = dateObj.getDate(),
      hour = dateObj.getHours(),
      minute = dateObj.getMinutes(),
      second = dateObj.getSeconds();
    //month < 10 && (month = ('0' + month));
    // day < 10 && (day = '0' + day);
    if (month < 10) {
      month = ('0' + month);
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
    result = format.replace('yyyy', year).replace('MM', month).replace('dd', day).replace('hh', hour).replace('mm', minute).replace('ss', second);
    return result;
  },
  priceFormat: function(total) {
    return formater.thousandComma(total);
    // var result = '';
    // if (total === 0 || total < 1) {
    //   result = total; //.toFixed(2);
    // } else {
    //   result = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    // }
    // return result;
  },
  convertTimezone: function(date, timezone, offset) {
    var timeOffset = offset ? offset : 0;
    var currDate = (typeof date === 'string') ? new Date(gmt2utc(date)) : date;
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = currDate.getTime() + (currDate.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * timezone) + timeOffset);
    // return time as a string
    return nd;
  }
};

export default  formater;
