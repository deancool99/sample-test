import React from 'react';
import ShareStyle from './style';
const TwitterShareView = React.createClass({
  render() {
  	return (    
  	  <span style={ShareStyle.icon}>
  	  	<img src="../assets/images/twIcon.png"/>
  	  </span>
  	);
  }
});
export default  TwitterShareView;