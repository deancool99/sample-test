import login from './login.json';
import globals from './globals.json';
import trade from './trade.json';
import account from './account.json';
import manager from './manager.json';
import message from './message.json';
import fund from './fund.json';
import assign from ('object-assign'); 

assign(login, globals, trade, account, manager, message, fund);
var I18n = function(key){
  var value = key;
  if(typeof data[key] === 'string'){
    value = data[key];
  }
  return value;
};
export default  I18n;
