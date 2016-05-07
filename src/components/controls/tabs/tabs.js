import './styles/style';
import React from 'react';
// import ReactDOM from ('react-dom');
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Styles from './styles/tabs';
var tabListWidth = 1030;
var TabsView = React.createClass({
  propTypes: {
    list: React.PropTypes.array,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
  },
  getInitialState() {
    return {
      tabsLeft: 0
    };
  },
  componentDidMount() {
    if(this.refs.tabList.offsetWidth > tabListWidth){
      this.refs.rightArrow.style.display = 'none';
      tabListWidth = this.refs.tabList.offsetWidth;
    }
  },
  scrollLeft() {
    var props = this.props,
        dom = this.refs.tabList,
        width = dom.offsetWidth,
        tabsLeft = this.state.tabsLeft,
        list = props.list || [],
        tabsWidth = tabListWidth / list.length,
        newLeft = tabsLeft + tabsWidth * Math.floor(width / tabsWidth),
        showLeftArrow = true,
        showRightArrow = true;
    if(newLeft > 0){
      newLeft = 0;
      showLeftArrow = false;
    }
    this.setState({tabsLeft: newLeft, showLeftArrow: showLeftArrow, showRightArrow: showRightArrow});
  },
  scrollRight() {
    const props = this.props,
        dom = this.refs.tabList,
        width = dom.offsetWidth,
        list = props.list || [],
        tabsLeft = this.state.tabsLeft,
        tabsWidth = tabListWidth / list.length;
    let newLeft = tabsLeft - tabsWidth * Math.floor(width / tabsWidth),
        showLeftArrow = true,
        showRightArrow = true;
    if(newLeft - width + tabListWidth < 0){
      newLeft = width - tabListWidth;
      showRightArrow = false;
    }
    this.setState({tabsLeft: newLeft, showLeftArrow: showLeftArrow, showRightArrow: showRightArrow});
  },
  render() {
    const {
      props,
      state
    } = this,
    {
      value,
      list,
      onChange
    } = props,
    {
      tabsLeft
    } = state;

    return (
      <div className='row' ref='tabs'>
        <div
          ref='tabList'
          style={{
            overflowX: 'hidden',
            width: '100%'
          }}>
        <Tabs
          className='animateLeft'
          style={{width: tabListWidth + 'px', position: 'relative', transform: 'translate3d(' + tabsLeft + 'px, 0px, 0px)'}}
          tabItemContainerStyle={{
            backgroundColor:'none',
            height:'30px'
          }}
          inkBarStyle={{
            display:'none'
          }}
          value={value}
          onChange={(v)=>{
            if(!list[v].disabled){
              onChange(v);
            }
          }}>
          {
            list.map(function(tab, i){
              var style = (value === i) ? Styles.tabFocus : Styles.tab;
              if(tab.disabled){
                style = Styles.disabled;
              }
              var label = <div className={tab.disabled ? 'disabled' : ''} style={style}>{tab.label}</div>;
              return (
                <Tab
                  style={{
                    height:'30px',
                    whiteSpace: 'nowrap',
                    width: 'auto',
                    padding: '0 3px 0 0'
                  }}
                  label={label}
                  value={i}
                  key={i}
                  />
              );
            })
          }
          </Tabs>
        </div>
        <div>
        {
            list.map(function(tab, i){
               return(
                <div key={i}
                    className={ (value === i) ? 'show' : 'hidden'}
                    style={{minHeight: '100px'}}
                    >
                  {tab.component}
                </div>
                );
            })
        }
        </div>
      </div>
    );
  }
});
export default  TabsView;
