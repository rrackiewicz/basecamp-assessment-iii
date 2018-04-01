import React from 'react';

class Movement extends React.Component {

  render() {  
    return (
      <div className="wrapper"> 
        <button type="button" className="btn btn-outline-primary btn-sm lfloat"><span className="fas fa-angle-double-left"></span> Move</button>
        <button type="button" className="btn btn-outline-primary btn-sm rfloat">Move <span className="fas fa-angle-double-right"></span></button>
      </div>
    )
  }
}

export default Movement;