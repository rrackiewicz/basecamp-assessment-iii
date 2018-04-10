import React from 'react';
import {statusEnum} from '../enums';
import {compileSkills} from '../skills';
import Field from './Field'

class SpecialSkill extends React.Component {

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

    return (
        <div className="skillWrapper">
          <h3><strong>{hand.charAt(0).toUpperCase() + hand.slice(1)}-Hand Special</strong></h3>
          <div className="skill">
            <div className="skcell"><span className="fas fa-caret-down"></span>&nbsp;{weaponName}&nbsp;<Field val1={weaponLevel} prefix="L"/></div>
            <div className="skcell">Rng: &nbsp;<Field val1={minRange} val2={maxRange} stat="" prefix=""/></div>
            <div className="skcell spn2">
            {(this.props.context === 'player') ?
              <div>
                {weaponSpecials.map((e,i) =>
                  <button className="btn btn-outline-primary btn-sm shimr5" key={i}>{Object.values(e)}</button>
                )}
              </div>
              : null
            }
            </div>
          </div>
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
    )
  }
}

export default SpecialSkill;

