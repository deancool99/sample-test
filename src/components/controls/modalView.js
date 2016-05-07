import Modal from 'Core/modal';
import React from 'react';
import ReactDOM from ('react-dom'); 
var ModalView = React.createClass({
    render:function(){
        var props = this.props,
            buttons = props.buttons || [],
            showHeader = props.title ? true : false,
            showFooter = (buttons.length > 0),
            show = props.show || false;
        return (
            <div className='app-modal-wrapper'>
                <div className={('modal fade' + (show ? ' in' : ''))} id={props.id} tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={{'display': (show ? 'block' : '')}}>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                          {
                            showHeader ? (
                              <div className='modal-header'>
                                {
                                  props.disableClose ? '' : (
                                      <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                                  )
                                }
                                  <h4 className='modal-title' id='myModalLabel'>{props.title}</h4>
                              </div>
                            ) : ''
                          }

                            <div className='modal-body'>
                                {
                                  <props.view/>
                                }
                            </div>
                            {
                              showFooter ? (<div className='modal-footer'>
                                {
                                  buttons.map(function(btn, i){
                                    return (
                                      <span key={i}>{btn}</span>

                                    );
                                  })
                                }
                              </div>) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    componentDidMount:function() {
      Modal.init(ReactDOM.findDOMNode(this).querySelectorAll('.modal'));
    }
});

export default  ModalView;
