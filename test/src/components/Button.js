import React from 'react';

class Button extends React.Component {

  render() {
    let cname = 'btn btn-outline-primary btn-sm shimr5';
    const val = this.props.val;
    const payload = this.props.payload;
    const context = this.props.context;

    !this.props.isDisabled ? null : cname += ' disabled'

    //look at Wes Bos video 16 for his disabled state buttons

    return (
      <button className={cname} onClick={() => this.props.callback(payload, context)}>{val}</button>
    )
  }
}

export default Button;
