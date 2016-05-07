import React from 'react';
import SelectField from 'material-ui/lib/SelectField';
import Styles from './styles/selectField';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';

const DropDownMenuView = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    items: React.PropTypes.array,
    height: React.PropTypes.any,
    itemLineHeight: React.PropTypes.any,
    itemHeight: React.PropTypes.any,
    disabled: React.PropTypes.bool
  },
  render() {
    const {
      onChange,
      value,
      items,
      disabled,
      className
    } = this.props;
    let {
      height,
      itemLineHeight,
      itemHeight
    } = this.props;
    if(!height){
      height = '30px';
    }
    if(!itemHeight){
      itemHeight = height;
    }
    if(!itemLineHeight){
      itemLineHeight = height;
    }
    return (
      <div className={className || ''} style={{border: '1px solid #ccc', borderRadius: '5px', height: height}}>
        <SelectField
          disabled={disabled || false}
          onChange={onChange || (() => {})}
          value={value}
          fullWidth={true}
          style={{height: height}}
          labelStyle={{
            fontSize: '12px',
            lineHeight: height,
            paddingRight: '10px',
            paddingLeft: '10px',
            color: '#244F6F',
            fontWeight: 'bold',
            height: height,
            whiteSpace: 'nowrap',
            top: '0',
            marginRight:'15px'
          }}
          // autoWidth={true}
          underlineStyle={{display: 'none'}}
          iconStyle={{top: '50%', fill: (disabled ? Styles.disabledColor : '#C64700'), right: '0px', margin: 0, marginTop: '-12px'}}
          >
          {
            items.map(function(item, i){
              return (
                item === 'divider' ? <Divider key={i} /> :
                <MenuItem
                  key={i}
                  innerDivStyle={{paddingLeft: '10px', paddingRight: '10px', lineHeight: itemLineHeight, height: itemHeight}}
                  value={item.value}
                  primaryText={item.text}/>
              );
            })
          }
        </SelectField>
    </div>
    );
  }
});
export default DropDownMenuView;
