import React from 'react';
import Field from './Field';
import Button from './Button';

class Gems extends React.Component {

  render() {  
    const color = Object.keys(this.props.gem)[0];
    const qty = this.props.gem[color];

    return (
      <div className="gem">
        <div className="gcell"><img src={require(`../images/${color}-gem.png`)} alt="" className="shimr5"/> <Field val1={qty} /></div>
          {/* <div className="gcell shimt5">
            {this.props.context === 'player' && qty > 0 ? (
              <Button val="use" payload={qty} clickTest={this.props.clickTest}/>
            ) : null }
          </div> */}
      </div> 
    )
  }
}

export default Gems;