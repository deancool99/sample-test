import assign from 'object-assign';
import React from 'react';
// import TableView from './table';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Filter from './filter';
import PopupGridList from './popupGridList';
import FlatButton from 'Controls/buttons/flatButton';
import Styles from './styles/gridList';
const GridListView = React.createClass({
  propTypes: {
    header: React.PropTypes.array.isRequired,
    template: React.PropTypes.object,
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.string,
    data: React.PropTypes.array,
    filter: React.PropTypes.array,
    onFilter: React.PropTypes.func,
    subLevel: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
    handleAction: React.PropTypes.func,
    onDoubleClick: React.PropTypes.func
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
      template,
      height,
      width,
      data,
      filter,
      onFilter,
      subLevel,
      selectable,
      handleAction,
      onDoubleClick
      // onClickRow
    } = this.props,
    {
      subItems
    } = this.state;
    return (
      <div>
        {
          subLevel ? (
            <PopupGridList
              show={subItems.length > 0}
              onHide={()=>this.setState({subItems: []})}
              data={subItems}
              />
          ) : null
        }
        <div>
          {
            filter ? (
              <Filter
                list={filter}
                submit={onFilter}/>
            ) : null
          }
        </div>
        <div className='gridList' style={{overflow: 'scroll', width: '100%', height:(height - 45 + 'px')}}>
          <Table
            wrapperStyle={{width: width || 'auto'}}
            fixedHeader={false}
            selectable={selectable || false}>
            <TableHeader style={assign({}, Styles.header, {paddingRight: '15px'})} displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow style={{height: '30px'}}>
                {
                  subLevel ? (
                    <TableHeaderColumn style={assign({}, {width: '10px'}, Styles.headerItem)}>
                      {' '}
                    </TableHeaderColumn>
                  ) : null
                }
                {
                  header.map(function(column, i){
                    return (
                      <TableHeaderColumn style={assign({}, {width: column.width || '100%'}, Styles.headerItem, column.style || {})} key={i}>
                        {column.label}
                      </TableHeaderColumn>
                    );
                  })
                }
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {
                data.map(function(item, i){
                  return (
                    <TableRow
                      onDoubleClick={onDoubleClick ? onDoubleClick.bind(null, item, i) : ()=>{}}
                      key={i}
                      style={{backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#E7EBEC', borderBottom: data.length === (i + 1) ? '1px solid #CAC8C1' : '', height: '25px'}}>
                      {
                        subLevel ? (
                          <TableRowColumn style={assign({}, {width: '10px'}, Styles.columnItem)}>
                            {
                              item.items ? (
                                <div onClick={()=>_this.setState({subItems: item.items})}>
                                  <i className='material-icons' style={Styles.arrow}>play_arrow</i>
                                </div>
                              ) : ' '
                            }
                          </TableRowColumn>
                        ) : null
                      }
                      {
                        header.map(function(column, j){
                          return (
                            <TableRowColumn style={assign({}, {width: column.width || '100%'}, Styles.columnItem)} key={j}>
                              {
                                column.id !== 'action' ? (
                                  (template || {})[column.id] ? (
                                    template[column.id](item)
                                  ) : item[column.id]
                                ) : (
                                  column.items.map(function(action, l){
                                    return <FlatButton
                                      onTouchTap={handleAction ? handleAction.bind(null, i, item, action.id) : (()=>{})}
                                      key={l}
                                      label={action.label}/>;
                                  })
                                )
                              }
                            </TableRowColumn>
                          );
                        })
                      }
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
      </div>
      </div>
    );
  }
});
export default GridListView;
