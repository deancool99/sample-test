import React from 'react';
import CustomStyle from 'Styles/material-ui-custom';
import Checkbox from 'material-ui/lib/checkbox';
const styles = {
  checkbox: {
    display: 'inline-block',
    width: 'auto',
    paddingRight: '40px',
    height: '22px'
  },
  iconStyle: {
    fill: CustomStyle.palette.primary1Color,
    marginRight: '5px'
  }
};
const CheckboxView = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    onCheck: React.PropTypes.func
  },
  onCheck(e, checked) {
    const {
      onCheck
    } = this.props;
    if(typeof onCheck === 'function'){
      onCheck(e, checked);
    }
  },
  render() {
    const {
      label,
      disabled,
      checked
    } = this.props;
    return (
      <Checkbox
        checked={checked}
        onCheck={this.onCheck}
        disabled={disabled || false}
        iconStyle={styles.iconStyle}
        label={label}
        style={styles.checkbox}/>
    );
  }
});
export default  CheckboxView;
