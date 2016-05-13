import React from 'react';
import ShareStyle from './style';
const EmailShareView = React.createClass({
  render() {
  	return (    
  	  <span style={ShareStyle.icon}>
  	  	<img src="../assets/images/emainIcon.png"/>
  	  </span>
  	);
  }
});
export default  EmailShareView;