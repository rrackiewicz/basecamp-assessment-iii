import React from 'react';

class DropDown extends React.Component {

  render() {
    let cname = 'btn btn-outline-primary btn-sm shimr5';
    const val = this.props.val;
    const payload = this.props.payload;
    const context = this.props.context;

    !this.props.isDisabled ? null : cname += ' disabled'


    return (
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gems
        </button>
        <div class="dropdown-menu">
          ...
        </div>
      </div>
      )
  }
}

export default DropDown;
