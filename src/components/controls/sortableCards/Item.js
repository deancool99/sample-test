
import React, { Component } from 'react';
import dragSource from 'react-dnd/lib/DragSource';
import dropTarget from 'react-dnd/lib/DropTarget';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white'
};

export default class Item extends Component {
  render(){
    const { text, connectDragSource, connectDropTarget, isDragging} = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(connectDropTarget(
      <div style={{ style, opacity }}>{text}</div>
    ));
  }
}

const type = 'item';

const itemSource = {
  beginDrag(props) {
    return { id: props.id };
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const itemTarget = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;

    if (draggedId !== props.id) {
      props.moveItem(draggedId, props.id);
    }
  }
};

function collectTaget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

var dragSourcefunc = dragSource(type, itemSource, collectSource);
var dropTargetfunc = dropTarget(type, itemTarget, collectTaget);
var item = dropTargetfunc(Item);
export default dragSourcefunc(item);
