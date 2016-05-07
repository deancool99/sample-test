import React from 'react';
import assign from ('object-assign'); 
import Toolbar from ('material-ui/lib/toolbar/toolbar'); 
import ToolbarGroup from ('material-ui/lib/toolbar/toolbar-group'); 
import Styles from './styles/panel';
import Paper from ('material-ui/lib/paper'); 
var PanelView = React.createClass({
  propTypes: {
    height: React.PropTypes.string,
    className: React.PropTypes.string,
    icon: React.PropTypes.node,
    text: React.PropTypes.string,
    actions: React.PropTypes.array,
    children: React.PropTypes.node,
    zDepth: React.PropTypes.number,
    styles:React.PropTypes.object
  },
  render() {
    const {
      height,
      className,
      icon,
      text,
      actions,
      children,
      zDepth,
      styles
    } = this.props;
    return (
      <Paper className={className} zDepth={zDepth || 1} style={{paddingTop: text ? '36px' : 0, position: 'relative'}}>
        {
          text ? (
            <Toolbar style={Styles.header}>
              <ToolbarGroup float='left'>
                {
                  icon ? (
                    <label style={Styles.headerIcon}>{icon}</label>
                  ) : null
                }
                <span className='divider'></span>{text}
              </ToolbarGroup>
              <ToolbarGroup float='right' style={{marginTop: '-3px'}}>
                {
                  actions ? (
                    actions.map(function(action, i){
                      return <span key={i} style={{lineHeight: '20px'}}>{action}</span>;
                    })
                  ) : null
                }
              </ToolbarGroup>
            </Toolbar>
          ) : null
        }
        <div style={assign({padding: '5px 10px', lineHeight: '20px', height: height || ''}, styles)}>
          {children}
        </div>
      </Paper>
    );
  }
});
export default  PanelView;
