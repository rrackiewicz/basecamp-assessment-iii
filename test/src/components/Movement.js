import React from 'react';

class Movement extends React.Component {

  returnButton = (dir) => {
    if (this.props.context === 'player') {
      if (dir === 'left') {
        return (this.props.pZone.zone > 1) ? (
          (<button type="button" className="btn btn-outline-primary btn-sm float-left"><span className="fas fa-angle-double-left"></span> Move</button>)
        ) : null
      } else {
        return (this.props.pZone.zone + 1 < this.props.mZone.zone) ? (
          (<button type="button" className="btn btn-outline-primary btn-sm float-right">Move <span className="fas fa-angle-double-right"></span></button>)
        ) : null
      }
    } else {
      if (dir === 'left') {
        return (this.props.mZone.zone - 1 > this.props.pZone.zone) ? (
          (<button type="button" className="btn btn-outline-primary btn-sm float-left"><span className="fas fa-angle-double-left"></span> Move</button>)
        ) : null
      } else {
        return (this.props.mZone.zone < 6) ? (
          (<button type="button" className="btn btn-outline-primary btn-sm float-right">Move <span className="fas fa-angle-double-right"></span></button>)
        ) : null
      }
    }
  }

  render() {  
    return (
      <div className="wrapper"> 
        {this.returnButton('left')}
        {this.returnButton('right')}
      </div>
    )
  }
}

export default Movement;