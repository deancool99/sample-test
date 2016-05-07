import CustomStyle from 'Styles/material-ui-custom';
import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
const CircularProgressView = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    mask: React.PropTypes.bool
    // fullScreen: React.PropTypes.bool
  },
  render() {
    const {
      size
      // fullScreen
    } = this.props;
    return (
    <div style={{
        // paddingTop: '50%',
        zIndex: 2000,
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }}>
      <div style={{
          // paddingTop: '50%',
          // top: '50%',
          // paddingLeft: '50%',
          position: 'relative',
          backgroundColor: CustomStyle.palette.disabledColor,
          textAlign: 'center',
          width: '100%',
          height: '100%'
        }}>
        <CircularProgress
          style={{
            marginTop: '-' + ((size || 2) * 25 / 2) + 'px',
            // marginLeft: '-' + ((size || 2) * 25 / 2) + 'px',
            top: '50%',
            lineHeight: '100%',
            textAlign: 'center',
            verticalAlign: 'middle'
            // left: '50%'
          }}
          color={CustomStyle.palette.primary1Color}
          size={size || 2}/>
      </div>
    </div>
    );
    // console.log('-' + ((size || 2) * 25) + 'px');
    // return (
    //   <div style={{position: fullScreen ? 'fixed' : 'absolute', boxSizing: 'border-box', zIndex: '1500', top: '0px', left: '0px', width: '100%', height: '100%', transition: 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', paddingTop: '187px'}}>
    //     <div data-reactid=".3.0">
    //       <div style={{boxSizing: 'border-box', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', position: 'relative', width: '75%', maxWidth: '768px', margin: '0px auto', zIndex: '1500', opacity: '1', transform: 'translate3d(0px, 64px, 0px)'}}>
    //       </div>
    //     </div>
    //     <div style={{position: 'fixed', height: '100%', width: '100%', top: '0px', left: '0px', opacity: 1, willChange: 'opacity', transform: 'translateZ(0px)', transition: 'left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', zIndex: 1400, backgroundColor: 'rgba(0, 0, 0, 0.541176)'}}>
    //       <CircularProgress
    //         style={{
    //           marginTop: '-' + ((size || 2) * 25 / 2) + 'px',
    //           marginLeft: '-' + ((size || 2) * 25 / 2) + 'px',
    //           top: '50%'
    //         }}
    //         color={CustomStyle.palette.primary1Color}
    //         size={size || 2}/>
    //     </div>
    //   </div>
    //
    // );
  }
});
export default CircularProgressView;
