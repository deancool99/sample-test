import React from 'react';
import FlatButton from ('material-ui/lib/flat-button'); 
import Styles from './styles/menuItemButton';
var MenuItemButtonView = React.createClass({
  propTypes: {
    img: React.PropTypes.node,
    label: React.PropTypes.node,
    onTouchTap: React.PropTypes.func,
    disabled: React.PropTypes.bool
  },
  render() {
    const {
      img,
      label,
      onTouchTap,
      disabled
    } = this.props;
    return (
      <FlatButton
        onTouchTap={() => {
          if(onTouchTap){
              onTouchTap();
          }
        }}
        style={Styles.menuItem}
        disabled={disabled}>
        {img}<label>{label}</label>
      </FlatButton>
    );
  }
});
export default  MenuItemButtonView;
