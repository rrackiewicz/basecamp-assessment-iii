import React from 'react';

class Log extends React.Component {

  render() {  
    return (
      <div 
        className="log rounded" 
        style={(this.props.align === 'left') ? {float: 'left'} : {float: 'right'}}
      >
        <div class="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
      </div>
    )
  }
}

export default Log;