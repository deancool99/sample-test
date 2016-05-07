import React from 'react';
import Dialog from 'Controls/dialogs/dialog';
import FlatButton from 'Controls/buttons/flatButton';
import GridListView from './gridList';
const PopupGridList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func
  },
  render() {
    const {
      data,
      onHide,
      show
    } = this.props;
    return (
      <Dialog
        size='large'
        actions={[
          <FlatButton label={'Close'} type={'secondary'} onTouchTap={onHide || function(){}}/>
        ]}
        onHide={onHide || function(){}}
        open={show || false}>
        {
          <GridListView
            height={300}
            header={[
              {id: 'execID', label: i18n('exec_id'), width: '120px'},
              {id: 'type', label: i18n('buy_or_sell'), width: '100px'},
              {id: 'masterID', label: i18n('master_id'), width: '120px'},
              {id: 'openTime', label: i18n('open_time'), width: '120px'},
              {id: 'dealID', label: i18n('deal_id'), width: '120px'},
              {id: 'ccyPair', label: i18n('ccy_pair'), width: '120px'},
              {id: 'valueDate', label: i18n('value_date'), width: '120px'},
              {id: 'dealtCCY', label: i18n('dealt_ccy'), width: '120px'},
              {id: 'dealtAmount', label: i18n('dealt_amount'), width: '320px'},
              {id: 'counterAmount', label: i18n('counter_amount'), width: '320px'},
              {id: 'user', label: i18n('user'), width: '120px'},
              {id: 'tenor', label: i18n('tenor'), width: '100px'},
              {id: 'fowardPoint', label: i18n('foward_point'), width: '150px'},
              {id: 'channel', label: i18n('channel'), width: '100px'},
              {id: 'dealSpot', label: i18n('deal_spot'), width: '150px'},
              {id: 'dealRate', label: i18n('deal_rate'), width: '150px'},
              {id: 'instrument', label: i18n('instrument'), width: '200px'},
              {id: 'status', label: i18n('status'), width: '150px'},
              {id: 'comment', label: i18n('comment'), width: '200px'},
              {id: 'orderID', label: i18n('order_id'), width: '120px'}
            ]}
            data={data}
            />
        }
        </Dialog>
    );
  }
});
export default PopupGridList;
