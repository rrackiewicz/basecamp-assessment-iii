import React from 'react';

class Arrow extends React.Component {
  
  render () {

    return (
      <div onClick={() => this.props.toggleOpen()}>
        <span className={this.props.isOpen ? 'fas fa-caret-down fa-lg inline': 'fas fa-caret-right fa-lg inline'}></span>&nbsp;
      </div>
      
    )
  }

}

export default Arrow;