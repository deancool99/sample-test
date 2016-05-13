import 'NodeModules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HeaderPanel from 'Components/panels/headerPanel';
//import IndexPanel from 'Components/panels/indexPanel';
import SharePanel from 'Components/panels/sharePanel';
import FooterPanel from 'Components/panels/footerPanel';
const IndexView = React.createClass({
  propTypes: {
    // backgroundColor: React.PropTypes.string,
    id: React.PropTypes.string
  },
  render() {
    const {
      id = ''
    } = this.props;
    return (
      <div id={id}>
          <HeaderPanel/>
          <SharePanel/>
          <FooterPanel/>
      </div>
    );
  }
});
export default IndexView;
