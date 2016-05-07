import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Chat extends Component {
  // ComponentDid
  render() {
    return (<div>Chat</div>);
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
