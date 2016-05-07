import CustomStyle from 'Styles/material-ui-custom';
import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';
const LinearProgressView = React.createClass({
  propTypes: {
    value: React.PropTypes.number,
    color: React.PropTypes.string
    // fullScreen: React.PropTypes.bool
  },
  render() {
    const {
      value,
      color
    } = this.props;
    let style = {height: '12px', backgroundColor: '#CBCBCB'};
    return (
    <LinearProgress
      style={style}
      value={value}
      mode='determinate'
      color={color || CustomStyle.palette.primary1Color}/>
    );
  }
});
export default LinearProgressView;
