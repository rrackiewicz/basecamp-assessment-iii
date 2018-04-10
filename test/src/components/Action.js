import React from 'react';

class Action extends React.Component {

  render() {  
    return (
      <div className="statShroud">
        <div className="actionBar act"></div>
        <div className="actionValue">{this.props.action} [ {this.props.actionRegen >= 0 ? '+' : null}{this.props.actionRegen} ]</div>
      </div>
    )
  }
}

export default Action;