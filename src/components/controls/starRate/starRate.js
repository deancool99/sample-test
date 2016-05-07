import React from 'react';

var StarRateControl = React.createClass({
  propTypes: {
    // onTouchTap: React.PropTypes.func,
    starRates: React.PropTypes.number
  },
  render() {
    const {
      // onTouchTap,
      starRates
    } = this.props;

    let starEl = [];
    for(let i = 0; i < starRates; i++){
      starEl.push(
        <i
          key={i}
          className="material-icons"
          style={{width: '24px', height: '24px'}}>star_rate
        </i>);
    }

    return (
      <div>
        {starEl}
      </div>
    );
  }
});
export default  StarRateControl;
