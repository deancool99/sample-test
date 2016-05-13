import React from 'react';
import ShareStyle from './style';
const FbShareView = React.createClass({
  fbShare: function() {
    window.open('http://www.facebook.com/sharer.php?','sharer','toolbar=0,status=0,width=600,height=450');
  },
  render() {
  	return (  
  	  <span style={ShareStyle.icon}>
  	  	  <img src="../assets/images/fbIcon.png" onClick={this.fbShare}/>
  	  </span>
  	);
  }
});
export default  FbShareView;