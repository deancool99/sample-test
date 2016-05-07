import React from 'react';
import Style from 'Assets/styles/style';
const BannderImgView = React.createClass({
  propTypes: {
    img: React.PropTypes.string,
    title:React.PropTypes.string
  },
  render() {
    const {
      img,
      title
    } = this.props;
    return (
       <img style={Style.imgWidth} src={img} title={title}/>
    );
  }
});
export default BannderImgView;
