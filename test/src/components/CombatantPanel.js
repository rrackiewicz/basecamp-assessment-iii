import React from 'react';
import Gems from './Gems';
import Stats from './Stats';
import Health from './Health';
import Action from './Action';
import Movement from './Movement';
import WeaponSkill from './WeaponSkill';
import ArmorSkill from './ArmorSkill';
import SpecialSkill from './SpecialSkill';
import Log from './Log';

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
 
        <Log
          log = {this.props.log}
          message = {this.props.message}
          mType = {this.props.m}
        />

        <div 
          className="imageWrapper rounded"
          style={this.justifyImage()}
        >
          {this.props.context === 'player' 
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

        {this.props.context === 'player'
          ?
            <div className = "nameWrapper">
              <h2 className="display-6 float-left">{this.props.player}</h2>
              <Movement 
                pZone = {this.props.pZone}
                mZone = {this.props.mZone}
                context = {this.props.context}
              />
            </div>
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
        </div>
        
        {this.props.hands.map((e,i) => 
          <WeaponSkill 
            hands = {e}
            context = {this.props.context}
            weaponLevels = {this.props.skillLevels.weapons}
            key = {i}
            action = {this.props.stats.action}
            baseAttack = {this.props.baseAttack}
          />
        )}

        {this.props.hands.map((e,i) =>
          <SpecialSkill
            hands = {e}
            context = {this.props.context}
            weaponLevels = {this.props.skillLevels.weapons}
            key = {i} 
            gems = {this.props.gems}
            specialAttack = {this.props.specialAttack}
          />
        )}

        <ArmorSkill 
          armor = {this.props.armor}
          armorSlots = {this.props.armorSlots}
        />

        <div className="gemWrapper">
          {Object.keys(this.props.gems).map(f =>
            <Gems 
              gem = {{[f]:this.props.gems[f]}} //es6 feature...what is it called?
              context = {this.props.context}
              key={f}
            />
          )}
        </div>
      </div>
    )
  }
}

export default CombatantPanel;