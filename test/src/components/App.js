import React from 'react';
import Banner from './Banner';
import CombatantPanel from './CombatantPanel';
import Log from './Log';
import {getName} from '../player';
import {getMonster} from '../monsters';
import {compileSkills} from '../player';
import {stateEnum} from '../enums';
import {weaponTypeEnum} from '../enums';
import {armorInitEnum} from '../enums';
import {weaponSpeedEnum} from '../enums';
import {armorTypeEnum} from '../enums';
import {statusInitEnum} from '../enums';

class App extends React.Component {
  state = {
    stateEnum: {},
    weaponTypeEnum: {},
    armorInitEnum: {},
    weaponSpeedEnum: {},
    armorTypeEnum: {},
    statusInitEnum: {},
    pActed: false,
    mActed: false,
		pDefended: false,
    mDefended: false,
    pHitPoits: 0,
    pBaseHealth: 0,
    pHealth: 0,
    pHealthRegen: 0,
    pAction: 0,
    pActionRegen: 0,
    pAttack: 0,
    pAttackBonus: 0,
    pDefense: 0,
    pDefenseBonus: 0,
    pLuck: 0,
    pLuckBonus: 0,
    pInit: 0,
    pInitBonus: 0,
    pSpeed: 0,
    pZone: 0,
    pHands: {left: '', right: ''},
    pGems: {red: 0, blue: 0, green: 0, purple: 0},
    pSkills: [],
    pLog: [],
    pStack: [],
    mHitPoints: 0,
    mBaseHealth: 0,
    mHealth: 0,
    mHealthRegen: 0,
    mAction: 0,
    mActionRegen: 0,
    mAttack: 0,
    mAttackBonus: 0,
    mDefense: 0,
    mDefenseBonus: 0,
    mLuck: 0,
    mLuckBonus: 0,
    mInit: 0,
    mInitBonus: 0,
    mSpeed: 0,
    mZone: 0,
    mHands: {left: '', right: ''},
    mGems: {red: 0, blue: 0, green: 0, purple: 0},
    mSkills: [],
    mLog: [],
    mStack: [],
    isNewGame: true,
    whoseTurn: '',
    level: 0,
    name: '',
    player: '',
    monster: '',
    points: 0
  }

  beginGame = () => {
    const stateEnum = this.stateEnum;
    const weaponTypeEnum = this.WeaponTypeEnum;
    const armorInitEnum = this.armorInitEnum;
    const weaponSpeedEnum = this.weaponSpeedEnum;
    const armorTypeEnum = this.armorTypeEnum;
    const statusInitEnum = this.statusInitEnum;
    const monsters = this.state.monsters;
    const player = this.state.player;
    const pSkills = compileSkills();
    const sex = (Math.floor(Math.random()*2)) ? 'boy' : 'girl';
    const pGems = {...this.state.pGems}; //clone state 
    pGems['green'] = 1;

    this.setState({stateEnum});
    this.setState({weaponTypeEnum});
    this.setState({armorInitEnum});
    this.setState({weaponSpeedEnum});
    this.setState({armorTypeEnum});
    this.setState({statusInitEnum });
    this.setState({isNewGame: false});
    this.setState({pHitPoint: 20});
    this.setState({pBaseHealth: 20});
    this.setState({pHealth: 20});
    this.setState({pHealthRegen: 1});
    this.setState({pAction: 10});
    this.setState({pActionRegen: 2});
    this.setState({pAttack: 5});
    this.setState({pDefense: 1});
    this.setState({pLuck: 1});
    this.setState({pInit: 1});
    this.setState({pInitBonus: 0});
    this.setState({pSpeed: 0});
    this.setState({pZone: 3});
    this.setState({pHands: {left: '', right: 'Dagger'}});
    this.setState({pGems});
    this.setState({pSkills});
    this.setState({player: getName(sex)});
    this.setState({sex});
    this.setState({mHitPoints: 20});
    this.setState({mBaseHealth: 5});
    this.setState({mHealth: 5});
    this.setState({mHealthRegen: 1});
    this.setState({mAction: 5});
    this.setState({mActionRegen: 0});
    this.setState({mAttack: 3});
    this.setState({mDefense: 1});
    this.setState({mLuck: 0});
    this.setState({mInit: 0});
    this.setState({mInitBonus: 0});
    this.setState({mSpeed: 0});
    this.setState({mZone: 4});
    this.setState({pHands: {left: '', right: 'Claws'}});
    this.setState({level: 1});
    this.setState({monster: getMonster(0).name});

    this.setState({whoseTurn: 'player'})
  } 

  render() {  
    return (
      <div className="container">
        <Banner 
          level = {this.state.level}
          isNewGame = {this.state.isNewGame}
          beginGame = {this.beginGame}
        />

        <div className="wrapper">
          {!this.state.isNewGame ? ( 
            <CombatantPanel 
              name = {this.state.name}
              player = {this.state.player}
              sex = {this.state.sex}
              attack = {this.state.pAttack}
              attackBonus = {this.state.pAttackBonus}
              defense = {this.state.pDefense}
              defenseBonus = {this.state.pDefenseBonus}
              luck = {this.state.pLuck}
              luckBonus = {this.state.pLuckBonus}
              init = {this.state.pInit}
              initBonus = {this.state.pInitBonus}
              speed = {this.state.pSpeed}
              zone = {this.state.pZone}
              gems = {this.state.pGems}
              health = {this.state.pHealth}
              healthRegen = {this.state.pHealthRegen}
              action = {this.state.pAction}
              actionRegen = {this.state.pActionRegen}
              context = 'player'
              align = 'left'
            />
          ) : null}

          {!this.state.isNewGame ? ( 
            <CombatantPanel 
              monster = {this.state.monster}
              attack = {this.state.mAttack}
              attackBonus = {this.state.mAttackBonus}
              defense = {this.state.mDefense}
              defenseBonus = {this.state.mDefenseBonus}
              luck = {this.state.mLuck}
              luckBonus = {this.state.mLuckBonus}
              init = {this.state.mInit}
              initBonus = {this.state.mInitBonus}
              speed = {this.state.mSpeed}
              zone = {this.state.mZone}
              gems = {this.state.mGems}
              health = {this.state.mHealth}
              healthRegen = {this.state.mHealthRegen}
              action = {this.state.mAction}
              actionRegen = {this.state.mActionRegen}
              context = 'monster'
              align = 'right'
            />
          ) : null}
        </div>

        {!this.state.isNewGame ? ( 
          <div className="wrapper">
            <Log
            log = {this.state.pLog}
            align = 'left'
            />
            <Log
            log = {this.state.mLog}
            align = 'right'
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default App;