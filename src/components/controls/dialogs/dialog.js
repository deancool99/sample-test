import React from 'react';
import Dialog from 'material-ui/lib/dialog'; 
import Styles from './styles/dialog';
var DialogView = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    title: React.PropTypes.node,
    actions: React.PropTypes.array,
    children: React.PropTypes.node,
    onHide: React.PropTypes.func,
    open: React.PropTypes.bool.isRequired,
    size: React.PropTypes.string,
    modal: React.PropTypes.bool
  },
  render() {
    const {
      className,
      title,
      actions,
      onHide,
      children,
      open,
      size,
      modal
    } = this.props;
    return (
      <Dialog
        className={className}
        modal={modal || false}
        onRequestClose={onHide}
        contentStyle={Styles[size ? size : 'medium']}
        bodyStyle={Styles.body}
        actions={actions}
        actionsContainerStyle={Styles.actionsContainer}
        autoDetectWindowHeight={false}
        autoScrollBodyContent={true}
        open={open}>
        {title ? title : null}
        {children}
      </Dialog>
    );
  }
});
export default  DialogView;
