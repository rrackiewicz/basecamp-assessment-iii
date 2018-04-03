import React from 'react';
import {stateEnum} from '../enums';
import {weaponTypeEnum} from '../enums';
import {armorInitEnum} from '../enums';
import {weaponSpeedEnum} from '../enums';
import {armorTypeEnum} from '../enums';
import {statusInitEnum} from '../enums';
import {compileSkills} from '../skills';

class Skill extends React.Component {

  render() { 
    const skills = compileSkills();
    const weaponType = weaponTypeEnum();
    const right = this.props.hands.right;
    const left = this.props.hands.left;
    const f = 'daggerPierce';
    console.log(skills[right].weaponType)
    //console.log(weaponType[].type);

    return (
      <div>
        {(right) 
          ? 
            <div className="skillWrapper">
              <strong>Right-Handed Weapon:</strong>
              <div className="skill">
                <div className="skcell">{skills[right].skillName}</div>
                <div className="skcell">Rng: &nbsp;<span className="badge skillBadge badge-secondary">{skills[right].range}</span></div>
                <div className="skcell spn2">
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
              </div>
                {skills[right].weaponType.map(e => {
                  return (
                    <div className="damType">
                      <div className="dtcell">{weaponType[f].type}</div>
                      <div className="dtcell">Init</div>
                      <div className="dtcell">Att</div>
                      <div className="dtcell">Act Cost</div>
                    </div>
                  )
                }
                )}
            </div>
          : null
        }

        {(left) 
          ? 
            <div className="skillWrapper">
              <strong>Left-Handed Weapon:</strong>
              <div className="skill">
                <div className="skcell">{skills[left].skillName}</div>
                <div className="skcell">Rng: &nbsp;<span className="badge skillBadge badge-secondary">{skills[left].range}</span></div>
                <div className="skcell spn2">
                <a className="btn btn-outline-primary btn-sm" href="#" role="button">Use</a></div>
              </div>
                {skills[left].weaponType.map(e => {
                  return (
                    <div className="damType">
                      <div className="dtcell">{weaponType[f].type}</div>
                      <div className="dtcell">Init</div>
                      <div className="dtcell">Att</div>
                      <div className="dtcell">Act Cost</div>
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

export default Skill;