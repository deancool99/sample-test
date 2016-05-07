import axios from 'axios';
import assign from ('object-assign');
import React from 'react';
import ReactDOM from ('react-dom');
var timer = '';
import PopupErrorMsgView from 'Components/modules/fund/popupFundErrorMsgView';
var ErrorPopupView = React.createClass({
  getInitialState: function() {
    return {
      show: true
    };
  },
  reditectPage: function(){
    this.setState({show: false});
    window.showLogoutConfirm = '';
    window.location.href = './login.html';
  },
  render: function(){
    return (
        <div>
          <PopupErrorMsgView
            msg={i18n('toekn_expired')}
            show={true}
            onHide={()=>{
              this.reditectPage();
            }}/>
        </div>);
  }
});
var element = document.createElement('div');

axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  var account = JSON.parse(sessionStorage.getItem('account')) || {};
  config.headers = assign({}, config.headers, {
    'x-token': account.token
  });
  return config;
}, function(error) {
  console.log(error);
  // Do something with request error
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response) {
  clearTimeout(timer);
  timer = setTimeout(()=>{
    sessionStorage.clear();
    ReactDOM.render(<ErrorPopupView/>, element);
  }, 1160000);
  // Do something with response data
  // console.log(response);
  return response;
}, function(error) {
  if (error.status === 401) {
    // show 401 auth failed
    // reditect login page
    // remove all sessionStorage
    sessionStorage.clear();
    ReactDOM.render(<ErrorPopupView/>, element);
  }
  // Do something with response error
  return Promise.reject(error);
});

export default  axios;
