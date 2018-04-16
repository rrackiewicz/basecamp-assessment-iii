import React from 'react';
import Field from './Field';

class Movement extends React.Component {

  returnButton = (dir) => {
    if (dir === 'left') {
      return this.props.pZone.zone > 1 ? (
        (<button type="button" className="btn btn-outline-primary btn-sm shimr5"><span className="fas fa-angle-double-left"></span> Move</button>)
      ) : null
    } else {
      return this.props.pZone.zone + 1 < this.props.mZone.zone ? (
        (<button type="button" className="btn btn-outline-primary btn-sm">Move <span className="fas fa-angle-double-right"></span></button>)
      ) : null
    }

  }

  render() { 
    const range = Math.abs(this.props.pZone.zone - this.props.mZone.zone)
    
    return (
      <div className = "wrapper float-right"> 
        {this.returnButton('left')}
        &nbsp;Range:&nbsp;<Field val1={range} />&nbsp;&nbsp;
        {this.returnButton('right')}
      </div>
    )
  }
}

export default Movement;