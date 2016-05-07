import  CustomStyle from 'Styles/material-ui-custom';
import React from 'react';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
const styles = {
  radioButton: {
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
const RadioButtonView = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    defaultSelected: React.PropTypes.string,
    valueSelected: React.PropTypes.string,
    items: React.PropTypes.array,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool
  },
  render() {
    const {
      name,
      defaultSelected,
      valueSelected,
      items,
      onChange,
      disabled
    } = this.props;
    return (
      <RadioButtonGroup name={name} valueSelected={valueSelected || ''} defaultSelected={defaultSelected || ''} onChange={onChange || (() => {})}>
        {
          items.map(function(item, i){
            return (<RadioButton
              iconStyle={styles.iconStyle}
              key={i}
              value={item.value}
              label={item.label}
              disabled={item.disabled || disabled || false}
              style={styles.radioButton}
            />);
          })
        }
      </RadioButtonGroup>
    );
  }
});
export default  RadioButtonView;
