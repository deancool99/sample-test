import React from 'react';
import assign from 'object-assign';
import FlatButton from 'material-ui/lib/flat-button';
import Styles from './styles/flatButton';
const FlatButtonView = React.createClass({
  propTypes: {
    // backgroundColor: React.PropTypes.string,
    style: React.PropTypes.object,
    label: React.PropTypes.node,
    type: React.PropTypes.string,
    onTouchTap: React.PropTypes.func,
    float: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    icon: React.PropTypes.node
  },
  render() {
    const {
      // backgroundColor,
      style,
      label,
      type,
      onTouchTap,
      float,
      disabled,
      icon
    } = this.props;
    let defaultStyle = JSON.parse(JSON.stringify(Styles[type] || Styles['general']));
    if(disabled){
      defaultStyle = JSON.parse(JSON.stringify(Styles.disabled));
    }
    if(float){
      defaultStyle['float'] = float;
    }
    return (
      <FlatButton
        icon={icon || null}
        label={label}
        style={assign({}, defaultStyle, style || {}, disabled ? {color: Styles.disabled.color, backgroundColor: '#F8F9FC'} : {})}
        onTouchTap={() => {
          if(typeof onTouchTap === 'function'){
            onTouchTap();
          }
        }}
        disabled={disabled}
        />
    );
  }
});
export default FlatButtonView;
