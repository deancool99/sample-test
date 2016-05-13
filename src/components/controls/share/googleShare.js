import React from 'react';
import ShareStyle from './style';
const GoogleShareView = React.createClass({
  render() {
  	return (    
  	  <span style={ShareStyle.icon}>
  	  	<img src="../assets/images/googleIcon.png"/>
  	  </span>
  	);
  }
});
export default  GoogleShareView;