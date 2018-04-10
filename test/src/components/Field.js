import React from 'react';

class Field extends React.Component {

  render() { 
    let cname = 'badge';
    let val1 = this.props.val1;
    let val2 = this.props.val2;

    this.props.lrg ? cname += ' lrgBadge' : cname += ' smlBadge'
    cname += ' ' + this.props.stat;
    if (this.props.pill) cname += ' pill shimr5';

    const getVal = () => {
      if (this.props.pos) {
        return val1 > 0 ? '+' + val1 : val1;
      }

      if (val2) {
        return val1.toString() + ' / ' + val2.toString();
      }

      return val1;       
    }

    return (
          <span className={cname}>{this.props.prefix}{getVal()}</span>
    )
  }
}

export default Field;
