import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Server from 'react-dom/server';
import IndexView from 'Components/views/indexView';
import { Provider } from 'react-redux';
import store from 'Stores';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
if (typeof document !== 'undefined') {
  let element = document.getElementById('content');
  if (document.getElementById('content') === null) {
    element = document.createElement('div');
    element.id = 'content';
    document.body.appendChild(element);
  }
  ReactDOM.render(
    <Provider store={store}>
      <div className='container'>
        <IndexView/>
      </div>
    </Provider>, element);
}
export default function(path, props, callback) {
  // Notice that we are using renderToString
  const html = Server.renderToString(
    <Provider >
      <div className='container'>
        <IndexView id='content'/>
      </div>
    </Provider>);
  if(typeof props.html === 'string'){
    callback(props.html.replace('<!--<htmlString>-->',html));
  }else{
    callback(html);
  }
}
