import React from 'react';
import Field from './Field';
import {armorInitEnum} from '../enums';
import {compileSkills} from '../skills';
import Arrow from './Arrow';

class ArmorSkill extends React.Component {

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
    const armorInit = armorInitEnum();
    const armor = this.props.armor;
    const weight = skills[armor].weight;
    const def = skills[armor].def;

    return (
        <div className="skillWrapper">
          <h3><strong>Armor:</strong></h3>
          <div className="skill">
            <div className="skcell">
              {this.props.armorSlots.length > 0 ?
                  <Arrow isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
                  : null
              }
              Type: &nbsp;
              <Field val1={skills[armor].skillName}/>
            </div>     
            <div className="skcell">
              Wgt: &nbsp;
              <Field val1={weight}/>
            </div> 
            <div className="skcell">
              Init: &nbsp;
              <Field val1={armorInit[weight]} stat="init" pos/>
            </div> 
            <div className="skcell">
              Def: &nbsp;
              <Field val1={def} stat="def" pos/>
            </div> 
          </div>

          {this.state.isOpen ? 
            <div>
              {this.props.armorSlots.map((e,i) => {
                  return (
                    <div className="skill" key={i}>
                      <div className="dtcell">Slot {i+1}</div>
                      <div className="dtcell"></div>
                      <div className="dtcell"></div>
                      <div className="dtcell"></div>
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

export default ArmorSkill;