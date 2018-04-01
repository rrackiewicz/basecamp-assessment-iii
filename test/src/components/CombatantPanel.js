import React from 'react';
import GemsPanel from './GemsPanel';
import Stats from './Stats';
import Health from './Health';
import Action from './Action';
import Movement from './Movement';

class CombatantPanel extends React.Component {

  render() {  
    return (
      <div 
        className="panelWrapper wrapperBorder rounded"
        style={(this.props.align === 'left') ? {float: 'left'} : {float: 'right'}}
      >
        <Movement 
          zone = {this.props.zone}
        />
        <div className="imageWrapper rounded">
          {(this.props.context === 'player') ? 
                <img src={require(`../images/${this.props.sex}.png`)} alt=""/> 
              :
                <img src={require(`../images/${this.props.monster}.png`)} alt=""/>
          }
          <Health 
            health = {this.props.health}
            healthRegen = {this.props.healthRegen}
          />
          <Action 
            action = {this.props.action}
            actionRegen = {this.props.actionRegen}
          />
        </div>

        {(this.props.context === 'player')
          ?
            <h2 className="display-6">{this.props.player}</h2>
          :
            <h2 className="display-6">{this.props.monster}</h2>
        }

        <Stats 
          attack = {this.props.attack}
          defense = {this.props.defense}
          luck = {this.props.luck}
          init = {this.props.init}
          attackBonus = {this.props.attackBonus}
          defenseBonus = {this.props.defenseBonus}
          luckBonus = {this.props.luckBonus}
          initBonus = {this.props.initBonus}
        />

        <GemsPanel 
          gems = {this.props.gems}
          context = {this.props.context}
        />
      </div>
    )
  }
}

export default CombatantPanel;