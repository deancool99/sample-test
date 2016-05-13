import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShareStyle from './style';
import FbShare from 'Controls/share/fbShare';
import TwitterShare from 'Controls/share/twitterShare';
import GoogleShare from 'Controls/share/googleShare';
import EmailShare from 'Controls/share/emailShare';
class Chat extends Component {
  // ComponentDid
  render() {
    return (
      <div>
        <span style={ShareStyle.shareTitle}>Share</span>
      	<hr style={ShareStyle.hr}/>
      	<div>
      	  <FbShare/>
      	  <TwitterShare/>
      	  <GoogleShare/>
      	  <EmailShare/>
      	</div>
      </div>
    );
  }
}
Chat.propTypes = {
  data:PropTypes.array,
  dispatch:PropTypes.func
};
function mapStateToProps(state) {
  return {
    state: state.chatReducer
  };
}
export default connect(mapStateToProps)(Chat);
