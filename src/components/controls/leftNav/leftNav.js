import React from 'react';
import LeftNav from ('material-ui/lib/left-nav'); 
var LeftNavView = React.createClass({
  propTypes: {
    open: React.PropTypes.bool,
    children: React.PropTypes.node
  },
  render: function() {
    const {
      open,
      children
    } = this.props;
    return (
      <LeftNav open={open}
        className='leftNav'
        style={{backgroundColor: '#244E6F'}}
        width={80}>
      {children}
      </LeftNav>
    );
  }
});
export default  LeftNavView;
