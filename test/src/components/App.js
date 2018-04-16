import React from 'react';
import Banner from './Banner';
import CombatantPanel from './CombatantPanel';
import {getName} from '../player';
import {getMonster} from '../monsters';
import {randn} from '../helpers';
import {weaponTypeEnum} from '../enums';
import {armorSkillEnum} from '../skills';

class App extends React.Component {
  state = {
    //Player state
    pStats: {
      baseHealth: 0,
      health: 0,
      healthRegen: 0,
      action: 0,
      actionRegen: 0,
      attack: 0,
      attackBonus: {
        left: 0,
        right: 0,
        both: 0,
        tail: 0
      },
      defense: 0,
      defenseBonus: 0,
      luck: 0,
      luckBonus: 0,
      init: 0,
      initBonus: {
        left: 0,
        right: 0,
        both: 0,
        tail: 0
      },
      speed: 0,
    },
    pZone: {
      zone: 0, 
      dir: ''
    },
    pHands: [],
    pArmor: '',
    pArmorSlots: [
    ],
    pGems: {
      att: 0, 
      def: 0, 
      luck: 0, 
      init: 0,
      black: 0
    },
    pSkillLevels: {
      weapons: {},
      armor: {},
      other: {}
    },
    pSkills: [],
    pBuffs: [],
    pDebuffs: [],
    pLog: [],
    pQue: [],

    //Monster state
    mStats: {
      baseHealth: 0,
      health: 0,
      healthRegen: 0,
      action: 0,
      actionRegen: 0,
      attack: 0,
      attackBonus: {
        left: 0,
        right: 0,
        both: 0,
        tail: 0
      },
      defense: 0,
      defenseBonus: 0,
      luck: 0,
      luckBonus: 0,
      init: 0,
      initBonus: {
        left: 0,
        right: 0,
        both: 0,
        tail: 0
      },
      speed: 0,
    },
    mZone: {
      zone: 0, 
      dir: ''
    },
    mHands: [],
    mArmor: '',
    mArmorSlots: [],
    mGems: {
      att: 0, 
      def: 0, 
      luck: 0, 
      init: 0,
      black: 0
    },
    mSkillLevels: {
      weapons: {},
      armor: {},
      other: {}
    },
    mSkills: [],
    mBuffs: [],
    mDebuffs: [],
    mLog: [],
    mStack: [],
    
    //Game state
    isNewGame: true,
    whoseTurn: '',
    level: 1,
    round: 0,
    turn: 0,
    player: '',
    monster: '',
    points: 0,
    pActed: false,
    mActed: false,
		pDefended: false,
    mDefended: false
  }

  beginGame = () => {

    //State temporary variables
    const sex = (Math.floor(Math.random()*2)) ? 'boy' : 'girl';
    
    //Shallow copies of objects to avoid mutation of state properties
    const pStats = {...this.state.pStats};
    const pZone = {...this.state.pZone};
    const pHands = [...this.state.pHands];
    let pArmor = {...this.state.pArmor};
    const pGems = {...this.state.pGems};
    const pSkillLevels = {...this.state.pSkillLevels};
    const pSkills = [...this.state.pSkills];
    //const pBuffs = [...this.state.pBuffs];
    //const pDebuffs = [...this.state.pDebuffs];
    //const pLog = [...this.state.pLog];
    //const pStack = [...this.state.pStack];
    
    //Update Player temporary variables
    pStats.baseHealth = 20;
    pStats.health = 20;
    pStats.healthRegen = 1;
    pStats.action = 10;
    pStats.actionRegen = 2;
    pStats.attack = 5;
    pStats.defense = 1;
    pStats.init = 1; 
    pStats.luck = 1;
    pStats.speed = 1;
    pZone.zone = 2;
    pZone.dir = 'center';
    pHands.push({right: 'dagger'});
    pArmor = 'cloth';
    pGems['luck'] = 1;
    pGems['black'] = 2;
    pGems['def'] = 0;
    pSkillLevels.weapons.dagger = {level : 1};
    pSkills.push('heal');
  
    //Player State updates
    this.setState({
      pStats, 
      pZone,
      pHands,
      pArmor,
      pGems,
      pSkillLevels,
      pSkills,
      player: getName(sex),
      sex
    });
   
    //Game State updates
    this.setState({
      level: 1,
      isNewGame: false,
      whoseTurn: 'player'
    });

    this.buildMonster(); //build monster
    //this.calcBonuses(); //generate bonuses *must be done each turn*
  } 

  buildMonster = () => {

    //Shallow copies of objects to avoid mutation of state properties
    const mStats = {...this.state.mStats};
    const mZone = {...this.state.mZone};
    let mHands = [...this.state.mHands];
    let mArmor = {...this.state.mArmor};
    let mArmorSlots = [ ...this.state.mArmorSlots]
    //const mGems = {...this.state.mGems}; 
    let mSkillLevels = {...this.state.mSkillLevels};
    //const mSkills = [...this.state.mSkills];
    //const mBuffs = [...this.state.mBuffs];
    //const mDebuffs = [...this.state.mDebuffs];
    //const mLog = [...this.state.mLog];
    //const mStack = [...this.state.mStack];
    const level = this.state.level;

    //Update Monster temporary variables
    mStats.health = getMonster(level).stats.health;
    mStats.healthRegen = getMonster(level).stats.healthRegen;
    mStats.action = getMonster(level).stats.action;
    mStats.actionRegen = getMonster(level).stats.actionRegen;
    mStats.attack = getMonster(level).stats.attack;
    mStats.defense = getMonster(level).stats.defense;
    mStats.init = getMonster(level).stats.init;
    mStats.luck = getMonster(level).stats.luck; 
    mStats.speed = getMonster(level).stats.speed;
    mZone.zone = 5;
    mZone.dir = 'center';
    mHands = getMonster(level).hands;
    mArmor = getMonster(level).armor;
    mArmorSlots = getMonster(level).armorSlots;
    mSkillLevels = getMonster(level).skillLevels;

    //Monster State updates. By calling setState once we are batching
    this.setState({
      mStats,
      mZone,
      mHands,
      mArmor,
      mArmorSlots,
      mSkillLevels,
      monster: getMonster(level).name
    });
  }

  playerActions = (payload) => {
    //player CLICKS on action triggers this function callback
    //calcBonuses(payload, context) store in bonuses variables
    //call attackAction for attack action
    //call specialAction for special action
    //call moveAction for movement action
    //call armorAction for gem armor action
    //call gemAction for pop gem action
    //call monsterActions
  }
  monsterActions = (payload) => {
    //calcBonuses(payload, context). store in bonuses variables{}
    //call monsterAI to determine monsters choices 
    //call baseAttack for attack action
    //call specialAttack for special action
    //call moveAction for movement action
    //call gemArmor for gem armor action
    //call popGem for pop gem action
    //send payload to manageBattle()
  }

  manageBattle = (payload, context) => {
    //payload is the action selected by each participant
    //payload: {player: '', monster: ''}
    
    // apply players buffs to state (we couldn't change these until monster chose their action)
    // determine if gem is produced for either player. How are we going to pass this info in?
    // DISPLAY initiative results
    // DISPLAY alerts regarding each players action, costs are applied as per alert (need an animation)
    // DISPLAY fight button. 
    // Player CLICKS on fight button. 
    // DISPLAY alerts to reflect outcome of action (movement, attack, special, pop gem, upgrade armor)
    // Status added to status que
    // DISPLAY next round button
    // PLAYER CLICKS on new round butotn.
    // Reset buffed stats based on status que
    // check for end of game
    // regen health and action

  }

  calcBonuses = (payload, context) => {
    const pStats = {...this.state.pStats};
    const mStats = {...this.state.mStats};
    const weaponType = weaponTypeEnum();
    const armorSkill = armorSkillEnum();
    //att bonus for attacker, def bonus for 
    if (context === 'player') {
      pStats.attack += weaponType[payload].att;
      mStats.defense += armorSkill[this.state.mArmor].def;
    } else { 
      mStats.attack += weaponType[payload].att;
      pStats.defense += armorSkill[this.state.pArmor].def
    } //don't forget to lower these stats
    //I think a better system would be to implement a que
    //Filter attack values then reduce down to an attack bonus
    //Each turn manage the que by removing expired buffs
    //[{attack: {val: 3}, {dur: 1}}]
    //The only time state is updated is for changes to leveling up skills
    //Remove bonuses from all stats and calc dynamically

    console.log(pStats.attack, mStats.defense)
    this.setState({pStats})
    this.setState({mStats})
    
    //add armor gems buffs to stats NOT IMPLEMENTED
  }


  calcInit = (context) => {}

  baseAttack = (payload, context) => {
    this.calcBonuses(payload, context)
    let attackRoll = 0;
    let defenseRoll = 0;
    context === 'player' ? attackRoll = randn(this.state.pStats.attack) : attackRoll = randn(this.state.mStats.attack);
    defenseRoll = context === 'player' ? randn(this.state.mStats.defense) : randn(this.state.pStats.defense);
 
  }

  specialAttack = (payload) => {
    //add effect to status[]
  }

  isGameOver = () => {}

  resetGame = () => {}

  updateStats = () => {
    //from att bonus from attacker and def bonus from defender
    //isGameOver()
  }

  updateRange = () => {
    //at the end of every round calculate range and pass via props
  }

  upgradeArmor = (context) => {
    //check to see if slots need to be reset and increased
  }

  render() {  
    return (
      <div className="container">
        <Banner 
          level = {this.state.level}
          turn = {this.state.turn}
          round = {this.state.round}
          isNewGame = {this.state.isNewGame}
          beginGame = {this.beginGame}
        />

        {!this.state.isNewGame ?
          <div className="wrapper">
            <CombatantPanel 
              player = {this.state.player}
              sex = {this.state.sex}
              skills = {this.state.pSkills}
              skillLevels = {this.state.pSkillLevels}
              hands = {this.state.pHands}
              armor = {this.state.pArmor}
              armorSlots = {this.state.pArmorSlots}
              stats = {this.state.pStats}
              pZone = {this.state.pZone}
              mZone = {this.state.mZone}
              gems = {this.state.pGems}
              context = 'player'
              align = 'left'
              baseAttack = {this.baseAttack}
              specialAttack = {this.specialAttack}
              log = {this.state.pLog}
              //mType = {this.state.messageType}
            />

            <CombatantPanel 
              monster = {this.state.monster}
              skills = {this.state.mSkills}
              skillLevels = {this.state.mSkillLevels}
              hands = {this.state.mHands}
              armor = {this.state.mArmor}
              armorSlots = {this.state.mArmorSlots}
              stats = {this.state.mStats}
              pZone = {this.state.pZone}
              mZone = {this.state.mZone}
              gems = {this.state.mGems}
              context = 'monster'
              align = 'right'
              log = {this.state.mLog}
            />
          </div>
        : null 
        } 
      </div>
    )
  }
}

export default App;