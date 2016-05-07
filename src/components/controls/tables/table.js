import assign from 'object-assign';
import React from 'react';
import FlatButton from 'Controls/buttons/flatButton';
import Styles from './styles/gridList';
const GridListView = React.createClass({
  propTypes: {
    header: React.PropTypes.array.isRequired,
    // height: React.PropTypes.number.isRequired,
    // width: React.PropTypes.string,
    data: React.PropTypes.array,
    subLevel: React.PropTypes.bool,
    // selectable: React.PropTypes.bool,
    handleAction: React.PropTypes.func
  },
  getInitialState() {
    return {
      subItems: []
    };
  },
  render() {
    const _this = this,
    {
      header,
      // height,
      // width,
      data,
      // filter,
      // onFilter,
      subLevel,
      // selectable,
      handleAction
    } = this.props;
    return (
      <div>
        <div style={{overflowX: 'auto', width: '100%'}}>
          <table className="table table-bordered">
            <thead>
              <tr>
                {
                  subLevel ? (
                    <th style={assign({}, {width: '10px'}, Styles.headerItem)}>{' '}</th>
                  ) : null
                }
                {
                  header.map(function(column, i){
                    return (
                      <th style={assign({}, {width: column.width || '100%'}, Styles.headerItem)} key={i}>{column.label}</th>
                    );
                  })
                }
              </tr>
            </thead>
          </table>
          <table className="table table-bordered">
          <tbody>
            {
              data.map(function(item, i){
                return (
                  <tr key={i} style={{backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#E7EBEC', borderBottom: data.length === (i + 1) ? '1px solid #CAC8C1' : '', height: '25px'}}>
                    {
                      subLevel ? (
                        <td style={assign({}, {width: '10px'}, Styles.columnItem)}>
                          {
                            item.items ? (
                              <div onClick={()=>_this.setState({subItems: item.items})}>
                                <i className='material-icons' style={Styles.arrow}>play_arrow</i>
                              </div>
                            ) : ' '
                          }
                        </td>
                      ) : null
                    }
                    {
                      header.map(function(column, j){
                        return (
                          <td style={assign({}, {width: column.width || '100%'}, Styles.columnItem)} key={j}>
                            {
                              column.id !== 'action' ? (
                                item[column.id]
                              ) : (
                                column.items.map(function(action, l){
                                  return <FlatButton
                                    onTouchTap={handleAction ? handleAction.bind(null, i, item, action.id) : (()=>{})}
                                    key={l}
                                    label={action.label}/>;
                                })
                              )
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
          </table>
      </div>
      </div>
    );
  }
});
export default GridListView;
