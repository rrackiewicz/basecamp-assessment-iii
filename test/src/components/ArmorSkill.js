import React from 'react';
import Field from './Field';
import {armorInitEnum} from '../enums';
import {compileSkills} from '../skills';

class ArmorSkill extends React.Component {

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
                <div className="skcell">Type: &nbsp;<Field val1={skills[armor].skillName}/></div>     
                <div className="skcell">Wgt: &nbsp;<Field val1={weight}/></div> 
                <div className="skcell">Init: &nbsp;<Field val1={armorInit[weight]} stat="init" pos/></div> 
                <div className="skcell">Def: &nbsp;<Field val1={def} stat="def" pos/></div> 
              </div>
        </div>
    )
  }
}

export default ArmorSkill;