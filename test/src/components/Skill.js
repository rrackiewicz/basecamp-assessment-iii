import React from 'react';
import {statusEnum} from '../enums';
import {weaponTypeEnum} from '../enums';
import {armorInitEnum} from '../enums';
import {weaponSpeedEnum} from '../enums';
import {statusInitEnum} from '../enums';
import {compileSkills} from '../skills';

class Skill extends React.Component {

getStat = (stat) => {
  switch(stat) {
    case 'att':
      return <span className="red"></span>;
    break;
    case 'def':
      return <span className="blue"></span>;
    break;
    case 'luck':
      return <span className="green"></span>;
    break;
    case 'init':
      return <span className="purple"></span>;
    break;
    case 'health':
      return <span className="healthPill"></span>;
    break;
    case 'action':
      return <span className="actionPill"></span>;
    break;
    case 'speed':
      return <span className="speedPill"></span>;
    break;
    case 'black':
      return <span className="black"></span>;
    break;
  }
}

  render() { 
    const skills = compileSkills();
    const weaponType = weaponTypeEnum();
    const weaponSpeed = weaponSpeedEnum();
    const armorInit = armorInitEnum();
    const status = statusEnum();
    const armor = this.props.armor;
    const right = this.props.hands.right;
    const left = this.props.hands.left;
    const skillLevels = this.props.skillLevels;
    let rightLevel;
    right ? rightLevel = skillLevels[right].level : rightLevel = '';
    let leftLevel;
    left ? leftLevel = skillLevels[left].level : leftLevel = '';

    return (
      <div>
        {(right) 
          ? 
            <div className="skillWrapper">
              <h3><strong>Right-Hand Weapon:</strong></h3>
              <div className="skill">
                <div className="skcell"><span className="fas fa-caret-down"></span>&nbsp;{skills[right].skillName}&nbsp;<span className="badge skillBadge badge-secondary">{'L' + rightLevel}</span></div>
                <div className="skcell">Rng: &nbsp;<span className="badge skillBadge badge-secondary">{skills[right].minRange} / {skills[right].maxRange}</span></div>
                <div className="skcell spn2">
                {(this.props.context === 'player')
                  ?
                  <div>
                    {skills[right].weaponType.map(e =>
                      <a className="btn btn-outline-primary btn-sm shimr5" href="#" role="button" key={e}>{weaponType[e].type}</a>
                    )}
                  </div>
                  : null
                }
                </div>
              </div>
                {skills[right].weaponType.map(e => {
                  return (
                    <div className="skill" key={e}>
                      <div className="dtcell">Type: &nbsp;<span className="badge skillBadge badge-secondary">{weaponType[e].type}</span></div>
                      <div className="dtcell"><span className="purple"></span>&nbsp;Init: &nbsp;<span className="badge skillBadge badge-secondary">{(weaponSpeed[weaponType[e].speed].init > 0) ? '+' : null}{weaponSpeed[weaponType[e].speed].init}</span></div>
                      <div className="dtcell"><span className="red"></span>&nbsp;Att: &nbsp;<span className="badge skillBadge badge-secondary">+{weaponType[e].att}</span></div>
                      <div className="dtcell"><span className="actionPill"></span>&nbsp;Act: &nbsp;<span className="badge skillBadge badge-secondary">-{weaponSpeed[weaponType[e].speed].action}</span></div>
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
              <h3><strong>Left-Hand Weapon:</strong></h3>
              <div className="skill">
                <div className="skcell"><span className="fas fa-caret-down"></span>&nbsp;{skills[left].skillName}&nbsp;<span className="badge skillBadge badge-secondary">{'L' + leftLevel}</span></div>
                <div className="skcell">Rng: &nbsp;<span className="badge skillBadge badge-secondary">{skills[left].minRange} / {skills[left].maxRange}</span></div>
                <div className="skcell spn2">
                {(this.props.context === 'player')
                  ?
                  <div>
                    {skills[left].weaponType.map(e =>
                      <a className="btn btn-outline-primary btn-sm shimr5" href="#" role="button" key={e}>{weaponType[e].type}</a>
                    )}
                  </div>
                  : null
                }
                </div>
              </div>
                {skills[left].weaponType.map(e => {
                  return (
                    <div className="skill" key={e}>
                      <div className="dtcell">Type: &nbsp;<span className="badge skillBadge badge-secondary">{weaponType[e].type}</span></div>
                      <div className="dtcell"><span className="purple"></span>&nbsp;Init: &nbsp;<span className="badge skillBadge badge-secondary">{(weaponSpeed[weaponType[e].speed].init > 0) ? '+' : null}{weaponSpeed[weaponType[e].speed].init}</span></div>
                      <div className="dtcell"><span className="red"></span>&nbsp;Att: &nbsp;<span className="badge skillBadge badge-secondary">+{weaponType[e].att}</span></div>
                      <div className="dtcell"><span className="actionPill"></span>&nbsp;Act: &nbsp;<span className="badge skillBadge badge-secondary">-{weaponSpeed[weaponType[e].speed].action}</span></div>
                    </div>
                  )
                }
                )}
            </div>
          : null
        }
   
        <div className="skillWrapper">
          <h3><strong>Special</strong></h3>
          {/* Map for each hand and replace right with e */}
          <div className="skill">
            <div className="skcell"><span className="fas fa-caret-down"></span>&nbsp;{skills[right].skillName}&nbsp;<span className="badge skillBadge badge-secondary">{'L' + rightLevel}</span></div>
            <div className="skcell">Rng: &nbsp;<span className="badge skillBadge badge-secondary">{skills[right].minRange} / {skills[right].maxRange}</span></div>
            <div className="skcell spn2">
            {(this.props.context === 'player')
              ?
              <div>
                {skills[right].special.map(e =>
                  <a className="btn btn-outline-primary btn-sm shimr5" href="#" role="button" key={e}>{Object.values(e)}</a>
                )}
              </div>
              : null
            }
            </div>
          </div>
            {skills[right].special.map(e => {
              return (
                <div className="skill" key={e}>
                  <div className="dtcell">&nbsp;<span className="badge skillBadge badge-secondary"></span>{status[Object.values(e)].name}</div>
                  <div className="dtcell">Cost:&nbsp;&nbsp;
                    {status[Object.values(e)].cost.map (f => 
                      <span key={f}>{this.getStat(f)}&nbsp;</span>
                    )}
                  </div>
                  <div className="dtcell">Val: &nbsp;{this.getStat(status[Object.values(e)].stat)}&nbsp;<span className="badge skillBadge badge-secondary">{status[Object.values(e)].val}</span></div>
                  <div className="dtcell">Dur: &nbsp;<span className="badge skillBadge badge-secondary">{status[Object.values(e)].dur}</span></div>
                </div>
              )
            }
            )}
        </div>

        <div className="skillWrapper">
              <h3><strong>Armor:</strong></h3>
              <div className="skill">
                <div className="skcell">{skills[armor].skillName}</div>     
                <div className="skcell">Wgt: &nbsp;<span className="badge skillBadge badge-secondary">{skills[armor].weight}</span></div> 
                <div className="skcell"><span className="purple"></span>&nbsp;Init: &nbsp;<span className="badge skillBadge badge-secondary">{(armorInit[skills[armor].weight] > 0) ? '+' : null}{armorInit[skills[armor].weight]}</span></div> 
                <div className="skcell"><span className="blue"></span>&nbsp;Def: &nbsp;<span className="badge skillBadge badge-secondary">{(skills[armor].def > 0) ? '+' : null}{skills[armor].def}</span></div> 
              </div>
        </div>

      

      </div>
    )
  }
}

export default Skill;