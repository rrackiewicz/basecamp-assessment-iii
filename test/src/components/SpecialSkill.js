import React from 'react';
import {statusEnum} from '../enums';
import {compileSkills} from '../skills';
import Field from './Field';
import Arrow from './Arrow';
import Button from './Button';

class SpecialSkill extends React.Component {

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
    const status = statusEnum();
    const hand = Object.keys(this.props.hands)[0];
    const weapon = this.props.hands[hand];
    const weaponObject = this.props.weaponLevels;
    const weaponLevel = weaponObject[weapon].level;
    const weaponInfo = skills[weapon];
    const weaponSpecials = weaponInfo.special;
    const weaponName = weaponInfo.skillName;
    const minRange = weaponInfo.minRange;
    const maxRange = weaponInfo.maxRange;
    const gems = this.props.gems;

    return (
        <div className="skillWrapper">
          <h3><strong>{hand.charAt(0).toUpperCase() + hand.slice(1)}-Hand Special</strong></h3>
          <div className="skill">
            <div className="skcell"><Arrow isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>{weaponName}&nbsp;<Field val1={weaponLevel} prefix="L"/></div>
            <div className="skcell">Rng: &nbsp;<Field val1={minRange} val2={maxRange} stat="" prefix=""/></div>
            <div className="skcell spn2">
              {(this.props.context === 'player') ?
                <span>
                  {weaponSpecials.map((e,i) =>
                    <span key={i}>
                      {gems[status[Object.values(e)].cost[0]] >= status[Object.values(e)].cost.length ?
                        <Button val={Object.values(e)} payload={Object.values(e)} context={this.props.context} callback={this.props.specialAttack} />
                        : 
                        <Button isDisabled val={Object.values(e)} payload={Object.values(e)} context={this.props.context} callback={this.props.specialAttack} />
                      }
                    </span>
                    )}
                </span>
                : null
              }
            </div>
          </div>
          {this.state.isOpen ?
            <div>
              {weaponSpecials.map((f,i) => {
                return (
                  <div className="skill" key={i}>
                    <div className="dtcell">&nbsp;<Field val1={status[Object.values(f)].name} /></div>
                    <div className="dtcell">Cost:&nbsp;&nbsp;
                      {status[Object.values(f)].cost.map ((g,i) => 
                        <Field val1=" " stat={g} pill key={i}/>
                      )}
                    </div>
                    <div className="dtcell">Val: &nbsp;<Field val1={status[Object.values(f)].val} stat={status[Object.values(f)].stat} pos/></div>
                    <div className="dtcell">Dur: &nbsp;<Field val1={status[Object.values(f)].dur} /></div>
                  </div>
                )
              }
              )}
            </div>
            : null
          }
        </div>
    )
  }
}

export default SpecialSkill;

