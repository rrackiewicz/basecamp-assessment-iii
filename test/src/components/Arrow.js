import React from 'react';

class Arrow extends React.Component {
  
  render () {

    return (
      <div onClick={() => this.props.toggleOpen()}>
        <span className={this.props.isOpen ? 'fas fa-caret-up fa-lg': 'fas fa-caret-right fa-lg'}></span>
      </div>
      
    )
  }

}

export default Arrow;