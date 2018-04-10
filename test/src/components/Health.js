import React from 'react';

class Health extends React.Component {

  render() {  
    return (
      <div className="statShroud">
        <div className="healthBar health"></div>
        <div className="healthValue">{this.props.health} [ {this.props.healthRegen >= 0 ? '+' : null}{this.props.healthRegen} ]</div>
      </div>
    )
  }
}

export default Health;