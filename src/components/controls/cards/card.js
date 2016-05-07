import React from 'react';
import Styles from './styles/card';
import IconButton from 'material-ui/lib/icon-button';

var CardView = React.createClass({
  propTypes: {
    img: React.PropTypes.node,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    onTouchTap: React.PropTypes.func
  },
  render() {
    const {
      img,
      title,
      text,
      onTouchTap
    } = this.props;
    return (
      <div style={Styles.advertFrame}>
        <div style={Styles.image}>
          {img}
        </div>
        <div
          style={Styles.textFrame}
          onTouchTap={() => {
            if(typeof onTouchTap === 'function'){
              onTouchTap();
            }
          }}>
          <div className='col-xs-10'>
            <span style={Styles.title}>{title}</span>
            <span>{text}</span>
          </div>
          <IconButton
            className='col-xs-2'
            children={<i className="material-icons">chevron_right</i>}/>
        </div>
      </div>
    );
  }
});
export default  CardView;
