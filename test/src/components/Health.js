import React from 'react';

class Health extends React.Component {

  render() {  
    return (
      <div className="healthPanel">
        <div className="health"></div>
        <div className="healthValue">{this.props.health}</div>
      </div>
    )
  }
}

export default Health;