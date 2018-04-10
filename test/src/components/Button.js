import React from 'react';

class Button extends React.Component {

  render() {
    const cname = 'btn btn-outline-primary btn-sm shimt5';
    const val = this.props.val;
    const payload = this.props.payload;

    //look at Wes Bos video 16 for his disabled state buttons

    return (
      <button className={cname} onClick={() => this.props.clickTest(payload)}>{val}</button>
    )
  }
}

export default Button;
