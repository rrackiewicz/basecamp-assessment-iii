import React from 'react';
import GemsPanel from './GemsPanel';
import StatsPanel from './StatsPanel';
import Health from './Health';

class ImagePanel extends React.Component {

  render() {  
    return (
      <div 
        className="panelWrapper rounded"
        style={(this.props.align === 'left') ? {float: 'left'} : {float: 'right'}}
        >
        <div className="imageWrapper rounded">
        {(this.props.context === 'player') ? 
              <img src={require(`../images/${this.props.sex}.png`)} alt=""/> 
            :
              <img src={require(`../images/${this.props.monster}.png`)} alt=""/>
        }

        <Health health={this.props.health}/>
        </div>

        {(this.props.context === 'player')
          ?
            <h2 className="display-6">{this.props.player}</h2>
          :
            <h2 className="display-6">{this.props.monster}</h2>
        }

        <StatsPanel
          attack = {this.props.attack}
          attackBonus = {this.props.attackBonus}
          defense = {this.props.defense}
          defenseBonus = {this.props.defenseBonus}
          healing = {this.props.healing}
          healingBonus = {this.props.healingBonus}
          luck = {this.props.luck}  
          luckBonus = {this.props.luckBonus}
          context = {this.props.context}
        />
        <GemsPanel 
          gems = {this.props.gems}
          context = {this.props.context}
        />
      </div>
    )
  }
}

export default ImagePanel;