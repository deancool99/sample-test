// import assign from 'object-assign';
import React from 'react';
const ListFooterView = React.createClass({
  propTypes: {
    showItems: React.PropTypes.number.isRequired,
    totalData: React.PropTypes.number
  },
  getInitialState() {
    const props = this.props;
    return {
        curPage: 1
    };
    props.changePage(this.state.curPage);
  },
  prePage(){
    const props = this.props;
    if(this.state.curPage > 1){
      this.setState({
        curPage: this.state.curPage - 1
      });
      props.changePage(this.state.curPage);
    }
  },
  changePage(index){
    const props = this.props;
    this.setState({
      curPage: index
    });
    props.changePage(this.state.curPage);
  },
  nextPage(){
    const props = this.props;
    // Math.ceil(props.totalData / props.showItems) -> 最後一頁
    if(this.state.curPage < Math.ceil(props.totalData / props.showItems)){
      this.setState({
        curPage: this.state.curPage + 1
      });
      props.changePage(this.state.curPage);
    }
  },
  render() {
    const {
        showItems,
        totalData
      } = this.props,
      {
        curPage
      } = this.state,
      self = this;

    // showItems為一頁顯示幾筆比數
    const maxPage = Math.ceil(totalData / showItems);
    let showItemsArray = [];

    for(let i = 1; i <= maxPage; i++){
      showItemsArray.push(i);
    }
    return (
      <div className='row' style={{marginTop: '10px'}}>
        <div
          style={{cursor: 'pointer', textAlign: 'center'}}
          className='col-xs-4 col-xs-offset-4'>
          {
            curPage === 1 ? null :
              <span
                style={{cursor: 'pointer', float: 'left'}}
                onClick={self.prePage}>
                  上一頁&nbsp;&nbsp;
              </span>
          }
          {
            showItemsArray.map(function(item, index){
              return (
                <span
                  key={index}
                  style={{cursor: 'pointer'}}
                  onClick={self.changePage.bind(null, item)}>
                    &nbsp;{item}
                </span>
              );
            })
          }&nbsp;
          {
            curPage === maxPage ? null :
              <span
                style={{cursor: 'pointer', float: 'right'}}
                onClick={self.nextPage}>
                  &nbsp;&nbsp;下一頁
              </span>
          }
        </div>
        <div style={{textAlign: 'right'}} className='col-xs-4'>
          顯示第 {((curPage - 1) * showItems) + 1} ~ {curPage * showItems} 筆資料，共 {totalData} 筆
        </div>
      </div>
    );
  }
});
export default ListFooterView;
