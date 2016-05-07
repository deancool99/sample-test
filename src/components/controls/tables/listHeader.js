import assign from 'object-assign';
import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import CircularProgress from 'Controls/progress/circular';
const ListHeaderView = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.string,
    minWidth: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    list: React.PropTypes.array.isRequired,
    selectable: React.PropTypes.bool,
    onDoubleClick: React.PropTypes.func,
    onClickSort: React.PropTypes.func,
    loading:React.PropTypes.bool,
    showItems: React.PropTypes.number
  },
  getInitialState() {
    let props = this.props,
        sortExpend = [],
        subSortExpend = [];
    // 取出type為sort的欄位id為key, 值為預設sortStatus
    props.list.map(function(item){
      let el = {};
      el[item.id] = item.sortStatus;

      if(item.type === 'sort'){
        sortExpend.push(el);
      }
      // list有第二層時
      if(item.subList){
        item.subList.map(function(subItem){
          let subEl = {};
          subEl[subItem.id] = subItem.sortStatus;

          if(subItem.type === 'sort'){
            subSortExpend.push(subEl);
          }
        });
      }
    });
    return {
        sortExpend: sortExpend,
        subSortExpend: subSortExpend
    };
  },
  sortData(id, index, typeSortExpend){
    let state = this.state,
        nextState = assign({}, state);

    nextState[typeSortExpend][index][id] = !nextState[typeSortExpend][index][id];
    this.setState(nextState);

    // 傳id和sort status回父層(tabs table)
    this.props.onClickSort(id, nextState[typeSortExpend][index][id]);
  },
  switchType(item, index){
    console.log(item, index);
  },
  render() {
    const {
        height,
        width,
        minWidth,
        data,
        selectable,
        onDoubleClick,
        list,
        loading,
        showItems
      } = this.props,
      {
        sortExpend,
        subSortExpend
      } = this.state,
      self = this,
      expandMore = <i className="material-icons" style={{fontSize: '14pt', marginLeft: '5px'}}>expand_more</i>,
      expandLess = <i className="material-icons" style={{fontSize: '14pt', marginLeft: '5px'}}>expand_less</i>;

    return (
      <div style={{overflow: 'scroll'}}>
        {
          loading ? <CircularProgress/> : null
        }
        <div
          className='gridList'
          style={{
            width: '100%',
            height: 'auto' || (height + 65 + 'px'),
            minWidth: minWidth + 'px'}}>
          <Table
            style={{border: '1px solid #CAC8C1'}}
            wrapperStyle={{width: width || 'auto'}}
            fixedHeader={false}
            selectable={selectable || false}>
            {
              list ? (
                <TableHeader
                  style={{
                    paddingRight: '15px',
                    backgroundColor: 'rgb(225, 225, 225)'
                  }}
                  displaySelectAll={false}
                  adjustForCheckbox={false}>
                  <TableRow style={{height: '30px'}}>
                    {
                      list.map(function(item, index){
                        // self.switchType(item, index);
                        let node = (<div></div>);
                        switch(item.type){
                          case 'sort':
                            node = <div
                              onClick={self.sortData.bind(null, item.id, index, 'sortExpend')}
                              style={{
                                cursor: 'pointer',
                                fontSize: '10pt',
                                display: 'flex',
                                textAlign: 'center'}}>
                                  {item.label}
                                  {
                                    sortExpend[index][item.id] ? 
                                    expandMore
                                    : expandLess
                                  }
                             </div>;
                          break;
                          default: 
                            node = <div style={{textAlign: 'center'}}>{item.label}</div>;
                        }
                        return (
                          <TableHeaderColumn
                            style={{
                              width: item.width || '100%',
                              color: 'gray',
                              fontSize: '12pt'
                            }}
                            key={index}>
                              {node}
                              {
                                item.subList ? (
                                  <div style={{borderTop: '1px solid #CAC8C1'}}>
                                    {
                                      item.subList.map(function(subItem, subIndex){
                                        let subNode = (<div></div>);
                                        switch(subItem.type){
                                          case 'sort':
                                            subNode = <div
                                              onClick={self.sortData.bind(null, subItem.id, subIndex, 'subSortExpend')}
                                              style={{cursor: 'pointer',
                                                      fontSize: '10pt',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      paddingTop: '5px',
                                                      width: subItem.width || 'auto'}}>
                                                {subItem.text}
                                                {
                                                  subSortExpend[subIndex][subItem.id] ? 
                                                  expandMore
                                                  : expandLess
                                                }
                                             </div>;
                                          break;
                                        }
                                        return (
                                          <div
                                            style={{display: 'inline-block'}}
                                            key={subIndex}>
                                            {subNode}
                                          </div>
                                        );
                                      })
                                    }
                                  </div>
                                ) : null
                              }
                          </TableHeaderColumn>
                        );
                      })
                    }
                  </TableRow>
                </TableHeader>
              ) : null
            }
            <TableBody displayRowCheckbox={false}>
              {
                data ? data.map(function(item, i){
                  return (
                    i < showItems ? 
                      <TableRow
                        onDoubleClick={onDoubleClick ? onDoubleClick.bind(null, item, i) : ()=>{}}
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#E7EBEC',
                          height: '25px'}}>
                        {
                          list.map(function(column, j){
                            return (
                              <TableRowColumn
                                style={{width: column.width || '100%', height: '35px'}}
                                key={j}>
                                {
                                  // 有subList時
                                  item[column.id] instanceof Array ? 
                                    item[column.id].map(function(subItem, subIndex){
                                      return(
                                        <div
                                          key={subIndex}
                                          style={{
                                            display: 'inline-block',
                                            width: column.subList[subIndex].width || 'auto'}}>
                                          {subItem[column.subList[subIndex].id]}
                                        </div>
                                      );
                                    // 無subList時
                                  }) : item[column.id]
                                }
                              </TableRowColumn>
                            );
                          })
                        }
                      </TableRow> : null
                    );
                }) : null
              }
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
});
export default ListHeaderView;
