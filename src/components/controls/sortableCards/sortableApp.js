
import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './Item';

export default class sortableApp extends Component {
  constructor(props){
    super(props);
    var items = props.sortableItems;
    this.moveItem = this.moveItem.bind(this);
    this.state = {
        items: items
      };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      items: nextProps.sortableItems
    });
  }

  moveItem(id, afterId) {
    const _this = this;
    const props = this.props,
          { onChange = function(){} } = props;
    const { items } = this.state;

    const item = items.filter(i => i.id === id)[0];
    const afterItem = items.filter(i => i.id === afterId)[0];
    const itemIndex = items.indexOf(item);
    const afterIndex = items.indexOf(afterItem);
    console.log('moveItem');
    this.setState(update(this.state, {
      items: {
        $splice: [
          [itemIndex, 1],
          [afterIndex, 0, item]
        ]
      }
    }), function(){
      console.log('moveItem: setState');
      onChange(_this.state.items);
    });
  }

  render(){
    const {items} = this.state;
    return (
      <div>
        {items.map(item=>{
          return (
            <Item key={item.id} id={item.id} text={item.text} moveItem={this.moveItem} />
          );
        })}
      </div>
    );
  }
}
// sortableApp.PropTypes = {
//     onChange: React.PropsTypes.func
//   };
var dragDropContext = DragDropContext;
var dragDrop = dragDropContext(HTML5Backend);
export default dragDrop(sortableApp);
