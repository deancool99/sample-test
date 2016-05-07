import React from 'react';
import CustomStyle from 'Styles/material-ui-custom';
import assigin from 'object-assign';
import TextField from 'material-ui/lib/text-field';
// import Format from 'Core/format';
const thousandComma = function(number){
 let num = number.toString();
 const pattern = /(-?\d+)(\d{3})/;
 while(pattern.test(num)){
  num = num.replace(pattern, '$1,$2');
 }
 console.log(typeof num, num);
 return num;
};
const TextFieldView = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    hintText: React.PropTypes.string,
    type: React.PropTypes.string,
    onChange: React.PropTypes.func,
    textAlign: React.PropTypes.string,
    format: React.PropTypes.string,
    color: React.PropTypes.string,
    id: React.PropTypes.string,
    icon: React.PropTypes.node
  },
  getInitialState() {
    return {
      value1: this.props.defaultValue
    };
  },
  getValue() {
    return this.state.value1;
  },
  clear() {
    this.setState({value1: ''});
  },
  // componentWillReceiveProps(nextProps) {
  //   this.setState({value: nextProps.defaultValue});
  // },
  onChange(e){
    const props = this.props,
        onChange = props.onChange,
        value = e.target.value;
    this.setState({value1: value});
    if(typeof onChange === 'function'){
      onChange(e);
    }
  },
  onBlur(e) {
    const {
      onChange,
      format
    } = this.props;
    switch (format) {
      case 'number':
      e.target.value = thousandComma(e.target.value);
      if(typeof onChange === 'function'){
        onChange(e);
      }
        break;
      default:
        break;
    }
  },
  render() {
    const {
      id,
      className,
      defaultValue,
      disabled,
      hintText,
      type,
      textAlign,
      format,
      value
    } = this.props,
    {
      value1
    } = this.state,
    height = '30px';
    return (
      <div className={className} style={{border: '1px solid #ccc', borderRadius: '5px', height: height}}>
        <TextField
          id={id}
          underlineStyle={{display: 'none'}}
          inputStyle={assigin({}, {textAlign: textAlign || 'left', paddingLeft: '5px', paddingRight: '5px'}, format === 'label' ? {color: CustomStyle.palette.textColor} : {})}
          style={{height: height, display: 'block', width: '100%'}}
          hintStyle={{bottom: 0}}
          type={type || 'text'}
          hintText={hintText}
          value={typeof value === 'undefined' ? value1 : value}
          onChange={this.onChange}
          defaultValue={defaultValue}
          disabled={disabled || format === 'label' || false}
          onBlur={this.onBlur}/>
      </div>
    );
  }
});
export default TextFieldView;
