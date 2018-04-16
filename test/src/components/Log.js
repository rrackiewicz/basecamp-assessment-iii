import React from 'react';

class Log extends React.Component {

  render() {
    let cname = 'alert';
    const mType = this.props.mType;

    switch (mType) {
      case 'buff':
        cname += ' alert-success'
      break;
      case 'debuff' :
        cname += ' alert-danger'
      break;
      default:
        cname += ' alert-secondary'
    }
  
    return (
      <div className={cname} role="alert">
        {this.props.message}
      </div>
    )
  }
}

export default Log;