import React from 'react';
import BannerModule from 'Components/modules/bannerModule';
import CalendarModule from 'Components/modules/calendarModule';
import Chat from 'Components/modules/chatModule';
export default React.createClass({
  render() {
    return (
      <div>
        <BannerModule/>
        <Chat/>
        <CalendarModule/>
      </div>
    );
  }
});
