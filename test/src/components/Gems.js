import React from 'react';
import Field from './Field';
import Button from './Button';
import {gemColorEnum} from '../enums';

class Gems extends React.Component {

  render() {  
    const stat = Object.keys(this.props.gem)[0]; //'def'
    const qty = this.props.gem[stat];
    const gemColor = gemColorEnum();

    return (
      <div className="gem">
        <div className="gcell">
          <img src={require(`../images/${gemColor[stat]}-gem.png`)} alt="" className="shimr5"/> <Field val1={qty} />
        </div>
        <div className="gcell shimt5">
          {this.props.context === 'player' ?
            <div>
              {qty > 0 ?
                <Button val="use" payload={qty} callback={this.props.clickTest}/>
              : 
                <Button isDisabled val="use" payload={qty} callback={this.props.clickTest}/>
              }
            </div>
          : null
          }
        </div>
      </div> 
    )
  }
}

export default Gems;