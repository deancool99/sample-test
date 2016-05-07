import React from 'react';
import ModuleStyle from './style';
import './calendar.css';
import assign from 'object-assign';
import Popover from 'material-ui/lib/popover/popover';
const Calendar = React.createClass({
  propTypes: {
    loading:React.PropTypes.bool,
    alertDate: React.PropTypes.object,
    setAlertData:React.PropTypes.func,
    initDate:React.PropTypes.object
  },
  getInitialState() {
    let now = this.props.initDate,
        initState = {
          nowYear: now.getFullYear(), //2016
          nowMonth: now.getMonth(), //4
          nowDay: now.getDate(), //22
          nowMonthTitle: '',
          nowTotalDays: []
        };
    return this.dataProcess(initState,0);
  },
  getDate:function(year, month, day) {
    let newday = new Date(year, month, day);
    let date = newday.getFullYear() + '/' + (newday.getMonth()+1) + '/' + newday.getDate();
    let chinDay =['ㄧ','二','三','四','五','六','日'];
    let detailDay = (newday.getMonth()+1) + '/' + newday.getDate() +'('+chinDay[newday.getDay()-1]+')';
    return {date,detailDay};
  },
  dataProcess:function(state, mathematical) {
    let newMonth = state.nowMonth + mathematical,
        newDate = new Date(state.nowYear, newMonth, state.nowDay); //下一個月的日期
    let nextState = {
        loading: '',
        focus:'',
        nowYear: newDate.getFullYear(), //2016
        nowMonth: newDate.getMonth(), //4
        nowDay: newDate.getDate(), //22
        nowMonthTitle: '',
        nowTotalDays: []
    };
    let monthTitle = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    nextState.nowMonthTitle = monthTitle[nextState.nowMonth]; //顯示月份Title
    //取的當月一號是星期幾
    let firstWeek = new Date(nextState.nowYear, nextState.nowMonth, 1);
    let week = firstWeek.getDay();

    //取的上個月一號有幾天
    let lastday = new Date(nextState.nowYear, nextState.nowMonth, 0);
    let lasttotal = lastday.getDate();
    if (week === 0) {
        for (let i = 0; i < 6; i++) {
            let date = this.getDate(nextState.nowYear, nextState.nowMonth-1, lasttotal);
            nextState.nowTotalDays.unshift({ title: lasttotal, date:date.date,detaildate:date.detailDay , style:{color:'#ccc'}});
            lasttotal--;
        }
    } else {
        for (let i = 0; i < week - 1; i++) {
            let date = this.getDate(nextState.nowYear, nextState.nowMonth-1, lasttotal);
            nextState.nowTotalDays.unshift({ title: lasttotal, date:date.date,detaildate:date.detailDay,style:{color:'#ccc'}});
            lasttotal--;
        }
    }
    //取得當月有幾天
    let day = new Date(nextState.nowYear, nextState.nowMonth + 1, 0);
    let total = day.getDate();
    for (let j = 0; j < total; j++) {
        let date = this.getDate(nextState.nowYear, nextState.nowMonth, j + 1);
        nextState.nowTotalDays.push({ title: j + 1, date:date.date,detaildate:date.detailDay,style:{} });
    }

    //補下個月的天數
    let remain = nextState.nowTotalDays.length % 7;
    if (remain !== 0) {
        let kday = 1;
        for (let k = remain; k < 7; k++) {
            let date = this.getDate(nextState.nowYear, nextState.nowMonth + 1, kday);
            nextState.nowTotalDays.push({ title: kday, date:date.date,detaildate:date.detailDay, style:{color:'#ccc'} });
            kday++;
        }
    }
    return nextState;
  },
  next:function(){
    let nextState = this.dataProcess(this.state,+1);
    this.props.setAlertData(nextState);
    this.setState(nextState);
  },
  prev:function(){
    let nextState = this.dataProcess(this.state,-1);
    this.props.setAlertData(nextState);
    this.setState(nextState);
  },
  clickChangeBackground:function(index){
    this.setState({focus: index});
  },
  handleTouchTap:function(event, detail,date){
    this.setState({
      popoverOpen:true,
      anchorEl: event.currentTarget,
      popoverdetail:detail,
      popoverdate:date
    });
  },
  handleRequestClose:function(){
    if(!event.target.hasAttribute('data-title')){
      this.setState({
        popoverOpen: false
      });
    }
  },
  render() {
    const self = this,
          state = self.state,
          {alertDate, loading} = self.props;
    return (
       <div className='row'>
          {
            loading ? <div style={{'marginLeft':'50%'}}>loading...</div> : null
          }
            <div className='col-md-offset-1 col-md-10' style={{border: 'black', borderStyle: 'solid'}}>
                <div className='row' style={ModuleStyle.ulpadding}>
                    <div style={ModuleStyle.titlePrev} onTouchTap={() => self.prev()}>
                        <i className='material-icons'>keyboard_arrow_left</i>
                    </div>
                    <div style={ModuleStyle.titleMonth}>
                        <div style={ModuleStyle.month}>{state.nowMonthTitle}</div>
                        <div style={ModuleStyle.year}>{state.nowYear}</div>
                    </div>
                    <div style={ModuleStyle.titleNext} onTouchTap={() => self.next()}>
                        <i className='material-icons'>keyboard_arrow_right</i>
                    </div>
                </div>
                <div className='calenderWeek'>
                    <ul style={ModuleStyle.ulpadding}>
                      <li style={ModuleStyle.noliicon}>Mon</li>
                      <li style={ModuleStyle.noliicon}>Tue</li>
                      <li style={ModuleStyle.noliicon}>Wed</li>
                      <li style={ModuleStyle.noliicon}>Thu</li>
                      <li style={ModuleStyle.noliicon}>Fri</li>
                      <li style={ModuleStyle.noliicon}>Sat</li>
                      <li style={ModuleStyle.noliicon}>Sun</li>
                    </ul>
                </div>
                <div className='calenderDay'>
                    <ul style={ModuleStyle.ulpadding}>
                      {state.nowTotalDays.map(function(item, key){
                         let titleStyle = item.style,
                             alert = alertDate[item.date] || {},
                             detail = alert.detail || [],
                             popoverdate = item.detaildate;
                         return <li key={key} style={ModuleStyle.dayliicon} onClick={()=> self.clickChangeBackground(key)}>
                                  <div style={assign({}, ModuleStyle.dayIcon, titleStyle, state.focus === key ? {'backgroundColor':'burlywood'} : {})}>
                                    <div style={ModuleStyle.dayTitle}>{item.title}</div>
                                    {
                                      (alert.title !== undefined)?
                                      <div style={ModuleStyle.restButton}>
                                        <button data-title={alert.title} className='btn  btn-success btn-xs' style={{width: '100%'}} onClick={(e)=> self.handleTouchTap(e,detail,popoverdate)}>{alert.title}</button>
                                      </div> :
                                      null
                                    }
                                  </div>
                                </li>;
                      })}
                      <Popover
                        open={state.popoverOpen}
                        anchorEl={state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={self.handleRequestClose}
                        useLayerForClickAway={false}
                        style={{'width': '25%','marginTop':'0px', backgroundColor: 'rgba(0, 0, 0, 0)',boxShadow:'none'}}
                      >
                        <div style={{marginTop:'-3px','marginBottom':'-3px',marginLeft:'10%'}}>
                           <img src="http://d26uhratvi024l.cloudfront.net/gsc/TNWHYS/c4/c8/c5/c4c8c5e24c8c44d2b5b1f6858ad1cd52/images/%E4%BC%91%E5%B8%82%E8%A1%8C%E4%BA%8B%E6%9B%86/u212.png?token=99487c29c28fb72d5c3bdbe78aa1cf50"/>
                        </div>
                        <div style={ModuleStyle.popoverDiv}>
                            <div style={ModuleStyle.popoverDayTitle}>
                              <div style={{'marginLeft': '5%'}}>{state.popoverdate}</div>
                            </div>
                            {(state.popoverdetail||[]).map(function(item, key){
                            return <div key={key} style={ModuleStyle.popoverContentDiv}>
                                       <i className='material-icons' style={ModuleStyle.popoverIcon} >info_outline</i>
                                       <span style={ModuleStyle.popoverTitle}>{item.title}</span>
                                       <div style={ModuleStyle.popoverContent}>
                                        {item.content}
                                       </div>
                                   </div>;
                            })}
                        </div>
                      </Popover>
                    </ul>
                </div>
            </div>
      </div>
    );
  }
});
export default Calendar;
