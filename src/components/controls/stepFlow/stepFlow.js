import React from 'react';
import assign from 'object-assign';
import Avatar from 'material-ui/lib/avatar';
const Styles = {
  icon: {
    border: '3px solid #FFF',
    backgroundColor: '#C2C2C2',
    color: '#FFFFFF',
    lineHeight: '36px'
  },
  focus: {
    backgroundColor: '#1D4E90'
  }
};
const StepFlow = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
    index: React.PropTypes.number
  },
  render(){
    const {
      list,
      index
    } = this.props;
    let focus = index || 0;
    return (
      <div style={{position: 'relative', fontWeight: 'bold'}}>
        <div style={{backgroundColor: focus > 0 ? '#FFFFFF' : '#C2C2C2', height: '4px', position: 'absolute', top: '50%', left: '13%', width: '25%', zIndex: '1'}}></div>
        <div style={{backgroundColor: focus > 1 ? '#FFFFFF' : '#C2C2C2', height: '4px', position: 'absolute', top: '50%', left: '38%', width: '25%', zIndex: '1'}}></div>
        <div style={{backgroundColor: focus > 2 ? '#FFFFFF' : '#C2C2C2', height: '4px', position: 'absolute', top: '50%', left: '63%', width: '25%', zIndex: '1'}}></div>
        {
          list.map(function(x, i){
            var isFocus = focus >= i;
            return (
              <div key={i} style={{position:'relative', zIndex:'3', fontSize:'12px', color: isFocus ? '#1D4E90' : '#C2C2C2', display: 'inline-block', width: (100 / list.length + '%'), textAlign: 'center'}}>
                <div>Step</div>
                <Avatar style={assign({}, Styles.icon, isFocus ? Styles.focus : {})}>{i + 1}</Avatar>
                <div>{x}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
});
export default StepFlow;
