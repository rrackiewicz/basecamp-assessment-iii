import React from 'react';
import GemsPanel from './GemsPanel';
import Stats from './Stats';
import Health from './Health';
import Action from './Action';
import Movement from './Movement';
import Skill from './Skill';

class CombatantPanel extends React.Component {
  justifyImage = () => {
    return {
      textAlign: this.props.context === 'player' ? this.props.pZone.dir : this.props.mZone.dir
    } 
  };

  render() {  
    return (
      <div 
        className="panelWrapper wrapperBorder rounded"
        style={(this.props.align === 'left') ? {float: 'left'} : {float: 'right'}}
      >
        <Movement 
          pZone = {this.props.pZone}
          mZone = {this.props.mZone}
          context = {this.props.context}
        />
        <div 
          className="imageWrapper rounded"
          style={this.justifyImage()}
        >
          {(this.props.context === 'player') 
            ? 
              <img src={require(`../images/${this.props.sex}.png`)} alt=""/> 
            :
              <img src={require(`../images/${this.props.monster}.png`)} alt=""/>
          }
          <Health 
            health = {this.props.stats.health}
            healthRegen = {this.props.stats.healthRegen}
          />
          <Action 
            action = {this.props.stats.action}
            actionRegen = {this.props.stats.actionRegen}
          />
        </div>

        {(this.props.context === 'player')
          ?
            <h2 className="display-6">{this.props.player}</h2>
          :
            <h2 className="display-6">{this.props.monster}</h2>
        }

        <div className="wrapperBorder">
          <Stats 
            context = 'header'
          />
          <Stats 
            context = 'base'
            stats = {this.props.stats}
          />
          {/* <Stats 
            context = 'weapon'
            //need to pass in hands {}. Let stats pull values from enums
          />
          <Stats 
            context = 'buff'
            //need to pass in buffs []. Filter it for debuffs.
          />
          <Stats 
            context = 'debuff'
            //need to pass in debuff []. Filter is for debuffs. 
          /> */}
        </div>
        
        <div className="wrapper">
          <Skill 
            hands = {this.props.hands}
            context = {this.props.context}
            armor = {this.props.armor}
            skillLevels = {this.props.skillLevels}
            gems = {this.props.gems}
            stats = {this.props.stats}
          />
        </div>

        <GemsPanel 
          gems = {this.props.gems}
          context = {this.props.context}
        />
      </div>
    )
  }
}

export default CombatantPanel;