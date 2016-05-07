import React from 'react';
var SliderView = React.createClass({
  propTypes: {
    height: React.PropTypes.string
  },
  getInitialState () {
    return {
      index: 0
    };
  },
  next() {
    const num = ((this.state.index + 1) % this.props.children.length);
    this.setState({
      index: num
    });
  },
  prev() {
    const num = ((this.state.index + this.props.children.length - 1) % this.props.children.length);
    this.setState({
      index: num
    });
  },
  change(index) {
    this.setState({
      index: index
    });
  },
  render() {
    const {
            children,
            height
          } = this.props,
      state = this.state;

    const self = this;
    return (
      <div className="row carousel"
           style={{minHeight: height, backgroundColor: 'black'}}>
        <ol className="carousel-indicators">
        {
          children.map(function(item, index){
            return <li
              onTouchTap={() => {self.change(index);}}
              key={index} />;
          })
        }
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            {children[state.index]}
            <div className="carousel-caption"></div>
          </div>
        </div>
        <a
          onTouchTap={() => {this.prev();}}
          className="carousel-control left"
          data-slide="prev">‹</a>
        <a
          onTouchTap={() => {this.next();}}
          className="carousel-control right"
          data-slide="next">›</a>
      </div>
    );
  }
});
export default SliderView;
