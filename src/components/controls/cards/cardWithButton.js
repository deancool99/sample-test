import React from 'react';
import Styles from './styles/card';
import Card from 'Controls/cards/card';

var CardView = React.createClass({
  propTypes: {
    img: React.PropTypes.node,
    button: React.PropTypes.node,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    onTouchTap: React.PropTypes.func
  },
  render() {
    const {
      img,
      button,
      title,
      text,
      onTouchTap
    } = this.props;
    return (
      <div style = {Styles.advertFrame}>
        {button}
        <Card 
          title = {title}
          text = {text}
          img = {img}
          onTouchTap = {() => onTouchTap()}/>
      </div>
    );
  }
});
export default  CardView;
