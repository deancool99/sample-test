import React from 'react';
// import {Float} from 'Core';
import TextField from 'Controls/textField/textField';
import LinkedPicker from 'Controls/datePicker/linkedPicker';
import SelectField from 'Controls/selectField/selectField';
import FlatButton from 'Controls/buttons/flatButton';
const FilterView = React.createClass({
  propTypes: {
    list: React.PropTypes.array,
    buttons: React.PropTypes.array,
    submit: React.PropTypes.func
  },
  getInitialState() {
    let values = {};
    this.props.list.map((item) =>{
      values[item.id] = item.value;
    });
    return {
        values
    };
  },
  onChangeSelect(key, e, index, value) {
    const state = this.state;
    let values = state.values;
    values[key] = value;
    this.setState({values: values});
  },
  onChangeText(key, e) {
    const props = this.props,
          list = props.list,
          state = this.state,
          target = e.target,
          obj = (list.filter(function(x){return x.id === key; })[0] || {}).type || false;
    let value = target.value.toString();
    if(obj){
      // if(obj === 'number'){
      //   value = Float.parse(value, 0);
      // }
      let values = state.values;
      values[key] = value;
      // console.log(values[key]);
      this.setState({values: values});
    }
  },
  onChangeDateLinked(key, data) {
    const state = this.state;
    let values = state.values;
    values[key] = data;
    this.setState({values: values});
  },
  onSubmit() {
    const {
      submit
    } = this.props,
    {
      values
    } = this.state;
    submit(values);
  },
  buttonClick(clickFunc){
    const {
      values
    } = this.state;
    clickFunc(values);
  },
  render() {
    const {
      props,
      state,
      onChangeSelect,
      onChangeText,
      onChangeDateLinked,
      onSubmit,
      buttonClick
    } = this,
    {
      list,
      buttons
    } = props,
    {
      values
    } = state;
    return (
      <div style={{fontSize: '12px', position: 'relative', top: '3px'}}>
        <div style={{height: '40px', display: 'inline-block', paddingRight: '75px', overflowY: 'hidden', 'width':'100%'}}>
        {
          list.map(function(item, index){
            var node = (<div></div>);
            switch(item.type){
              case 'number':
                node = <div style={{width: item.width, display: 'inline-block'}}>
                        <TextField
                          type='number'
                          min="0"
                          step="1"
                          defaultValue={item.value || ''}
                          onChange={onChangeText.bind(null, item.id)}/>
                       </div>;
              break;
              case 'text':
                node = <div style={{width: item.width, display: 'inline-block'}}>
                        <TextField
                          type={item.type}
                          defaultValue={item.value || ''}
                          onChange={onChangeText.bind(null, item.id)}/>
                       </div>;
              break;
              case 'select':
                node = <div style={{width: item.width, display: 'inline-block'}}>
                        <SelectField
                          value={values[item.id] || item.value || ''}
                          onChange={onChangeSelect.bind(null, item.id)}
                          items={item.list}
                          defaultValue={item.value || ''}
                          disabled={item.disabled || false}/>
                        </div>;
              break;
              case 'date':
              node = <LinkedPicker onChange={onChangeDateLinked.bind(null, item.id)} defaultValue={item.value || ''}/>;
              break;
            }
            return (
              <div style={{display: 'inline-block', top:'0px'}} key={index}>
                <span style={{
                  padding: '0px 5px',
                  display: 'inline-block'}}>
                  {item.label}
                </span>
                {node}
              </div>
            );
          })
        }
        </div>
        <div style={{position: 'absolute', right: 0, top: '-3px'}}>
          {
            buttons ? buttons.map(function(button, i) {
              return (
                <FlatButton key={i} style={button.style} float='right' label={button.name} type={'primary'} onTouchTap={buttonClick.bind(null, button.onClick)}/>
              );
            }) :
            <FlatButton float='right' label={'Search'} type={'primary'} onTouchTap={onSubmit}/>
          }
        </div>
      </div>
    );
  }
});
export default FilterView;
