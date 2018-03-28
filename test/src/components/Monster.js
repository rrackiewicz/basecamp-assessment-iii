import React from 'react';
import Health from './Health';

class Monster extends React.Component {

  render() {  
    return (
      <div className="monsterPanel rounded float-right">
        <div className="monsterImage rounded">
          <img src={require(`../images/${this.props.monster}.png`)} alt=""/>
          <Health 
            health={this.props.health}
          />
        </div>
        <h2 className="display-6">{this.props.monster}</h2>
        <div className="stats">
          <div className="cell"><div className="red"></div></div>
          <div className="cell right">Attack:</div>
          <div className="cell center">{this.props.attack}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.attackBonus}</div>
          <div className="cell right"></div>
          
          <div className="cell"><div className="blue"></div></div>
          <div className="cell right">Defense:</div>
          <div className="cell center">{this.props.defense}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.defenseBonus}</div>
          <div className="cell right"></div>
          <div className="cell"><div className="green"></div></div>
         
          <div className="cell right">Healing:</div>
          <div className="cell center">{this.props.healing}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.healingBonus}</div>
          <div className="cell right"></div>
          <div className="cell"><div className="purple"></div></div>
         
          <div className="cell right">Luck:</div>
          <div className="cell center">{this.props.luck}</div>
          <div className="cell right">Bonus:</div>
          <div className="cell center">{this.props.luckBonus}</div>
          <div className="cell"></div>
        </div>
      </div>
    )
  }
}

export default Monster;