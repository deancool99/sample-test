import login from './login.json';
import globals from './globals.json';
import trade from './trade.json';
import account from './account.json';
import manager from './manager.json';
import message from './message.json';
import fund from './fund.json';
import assign from 'object-assign'; 
export default  assign(login, globals, trade, account, manager, message, fund);
