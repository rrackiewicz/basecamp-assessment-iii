import React from 'react';
import Arrow from './Arrow';
import {weaponTypeEnum} from '../enums';
import {weaponSpeedEnum} from '../enums';
import {compileSkills} from '../skills';
import Field from './Field';

class WeaponSkill extends React.Component {

  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    let isOpen = this.state.isOpen;
    isOpen = !isOpen;
    this.setState({isOpen});
  }

  render() { 
    const skills = compileSkills();
    const weaponStats = weaponTypeEnum();
    const weaponSpeed = weaponSpeedEnum();
    const hand = Object.keys(this.props.hands)[0];
    const weapon = this.props.hands[hand];
    const weaponLevel = this.props.weaponLevels[weapon].level;
    const weaponInfo = skills[weapon];
    const weaponType = weaponInfo.weaponType;
    const weaponName = weaponInfo.skillName;
    const minRange = weaponInfo.minRange;
    const maxRange = weaponInfo.maxRange;

    return (
        <div className="skillWrapper">
          <h3><strong>{hand.charAt(0).toUpperCase() + hand.slice(1)}-Hand Weapon:</strong></h3>
          <div className="skill">
            <div className="skcell"><Arrow isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>&nbsp;{weaponName}&nbsp;<Field val1={weaponLevel} stat="" prefix="L"/></div>
            <div className="skcell">Rng: &nbsp;<Field val1={minRange} val2={maxRange} stat="" prefix=""/></div>
            <div className="skcell spn2">
            {this.props.context === 'player' ?
              <div>
                {weaponType.map(e =>
                  <button className="btn btn-outline-primary btn-sm shimr5" key={e}>{weaponStats[e].type}</button>
                )}
              </div>
              : null
            }
            </div>
          </div>
          {this.state.isOpen ? 
          <div>
          {weaponType.map(e => {
              return (
                <div className="skill" key={e}>
                  <div className="dtcell">Type: &nbsp;<Field val1={weaponStats[e].type} stat="" prefix=""/></div>
                  <div className="dtcell">Act: &nbsp;<Field val1={weaponSpeed[weaponStats[e].speed].action} stat="act" prefix="-"/></div>
                  <div className="dtcell">Init: &nbsp;<Field val1={weaponSpeed[weaponStats[e].speed].init} stat="init" prefix="" pos/></div>
                  <div className="dtcell">Att: &nbsp;<Field val1={weaponStats[e].att} stat="att" prefix="+"/></div>
                </div>
              )
            })}
          </div> 
          : null
          }
        </div>
    )
  }
}

export default WeaponSkill;