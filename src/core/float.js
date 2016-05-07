const mul = function(arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  if(s1.indexOf('.') !== -1){
     m += s1.split('.')[1].length;
  }
  if(s2.indexOf('.') !== -1){
     m += s2.split('.')[1].length;
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
},
add = function(arg1, arg2){
  var r1, r2, m;
  try { r1 = arg1.toString().split('.')[1].length; } catch (e) { r1 = 0; }
  try { r2 = arg2.toString().split('.')[1].length; } catch (e) { r2 = 0; }
  m = Math.pow(10, Math.max(r1, r2));
  return (mul(arg1, m) + mul(arg2, m)) / m;
},
roundDecimal = function (val, precision) {
  return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
},
parse = function(number, decimals){
  if(!decimals){
    decimals = 0;
  }
  number = number.toString();
  number = number.replace(/,/g, '');
  if(number === ''){
    return '';
  }else{
    if(/^[0-9.]+$/.test(number)){
      const decimalPoint = number.indexOf('.') > -1 && decimals > 0;
      number = number.split('.');
      if(decimalPoint){
        return number[0] + '.' + ((number[1] || '').substring(0, decimals));
      }else{
        return number[0];
      }
    }else{
      return null;
    }
  }

};
const float = {
  mul: mul,
  add: add,
  roundDecimal: roundDecimal,
  parse: parse
};
export default float;
