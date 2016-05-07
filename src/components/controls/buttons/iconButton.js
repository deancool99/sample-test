import React from 'react';
import assign from 'object-assign';
import IconButton from 'material-ui/lib/icon-button';
import Styles from './styles/iconButton';
const IconButtonView = React.createClass({
  propTypes: {
    img: React.PropTypes.node,
    label: React.PropTypes.string,
    onTouchTap: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    tooltip: React.PropTypes.node,
    focus: React.PropTypes.bool,
    style: React.PropTypes.object
  },
  render() {
    const {
      label,
      img,
      onTouchTap,
      tooltip,
      focus,
      style
    } = this.props;
    let bodyStyle = Styles.body;
    if(typeof focus !== 'undefined'){
      bodyStyle = Styles[focus ? 'focus' : 'unfocus'];
    }
    return (
      <span>
        <IconButton
          style={assign(bodyStyle, style || {})}
          onTouchTap={onTouchTap}
          tooltip={tooltip}>
          {img ? img : null}
          {label ? (<span style={{width: '25px', height: '25px', display: 'inline-block'}}>{'Edit'}</span>) : null}
        </IconButton>
      </span>
    );
  }
});
export default IconButtonView;
