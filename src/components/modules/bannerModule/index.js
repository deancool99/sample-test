import React, { Component, PropTypes } from 'react';
import Slider from 'Controls/sliders/slider';
import { connect } from 'react-redux';
class Banner extends Component {
  // ComponentDid
  render() {
    const self = this,
          props = this.props,
          state = props.state;
    return (<Slider
              height={'400px'}
              onChange={self.onChange}>
              {
                state.data.map(function(item, key){
                  // import src from item.src;
                  return <img src={item.src} key={key}/>;
                })
              }
            </Slider>);
  }
}
Banner.propTypes = {
  data:PropTypes.array,
  dispatch:PropTypes.func
};
function mapStateToProps(state) {
  return {
    state: state.bannerReducer
  };
}
export default connect(mapStateToProps)(Banner);
