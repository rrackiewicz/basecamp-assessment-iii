import React from 'react';
import Banner from './Banner';
import CombatantPanel from './CombatantPanel';
import Log from './Log';
import {getName} from '../player';
import {getMonster} from '../monsters';
import {compileSkills} from '../skills';

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
    pHands: {
      left: '', 
      right: '',
      both: '',
      tail: ''
    },
    pArmor: '',
    pGems: {
      red: 0, 
      blue: 0, 
      green: 0, 
      purple: 0},
    pSkills: [],
    pLog: [],
    pStack: [],

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
    mHands: {
      left: '', 
      right: '',
      both: '',
      tail: ''
    },
    mArmor: '',
    mGems: {
      red: 0, 
      blue: 0, 
      green: 0, 
      purple: 0
    },
    mSkills: [],
    mLog: [],
    mStack: [],
    
    //Game state
    isNewGame: true,
    whoseTurn: '',
    level: 1,
    name: '',
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
    const player = this.state.player;
    const skills = compileSkills();
    const sex = (Math.floor(Math.random()*2)) ? 'boy' : 'girl';
    
    //Shallow copies of objects to avoid mutation of state properties
    const pStats = {...this.state.pStats};
    const pSkills = [...this.state.pSkills];
    const pZone = {...this.state.pZone};
    const pHands = {...this.state.pHands};
    let pArmor = {...this.state.pArmor};
    const pGems = {...this.state.pGems};

    //Update Player temporary variables
    pGems['green'] = 1;
    pSkills.push({dagger: 1});
    pZone.zone = 2;
    pZone.dir = 'center';
    pHands.right = 'dagger';
    pArmor = 'flesh';
    pStats.baseHealth = 20;
    pStats.health = 20;
    pStats.healthRegen = 1;
    pStats.action = 10;
    pStats.actionRegen = 2;
    pStats.attack = 5; //base number
    pStats.defense = 1;
    pStats.init = 1; //base number
    pStats.luck = 1;
    pStats.speed = 1;

    //Player State updates
    this.setState({pStats});
    this.setState({pZone});
    this.setState({pHands});
    this.setState({pArmor});
    this.setState({pGems});
    this.setState({pSkills});
    this.setState({player: getName(sex)});
    this.setState({sex});

    //Game State updates
    this.setState({level: 1});
    this.setState({isNewGame: false});
    this.setState({whoseTurn: 'player'})

    this.buildMonster(); //build monster
    this.calcBonuses(); //generate bonuses *must be done each turn*
  } 

  buildMonster = () => {

    //State temporary variables
    const monsters = this.state.monsters;

    //Shallow copies of objects to avoid mutation of state properties
    const mStats = {...this.state.mStats};
    const mSkills = [...this.state.mSkills];
    const mZone = {...this.state.mZone};
    const mHands = {...this.state.mHands};
    let mArmor = {...this.state.mArmor};
    const mGems = {...this.state.mGems}; 
    const level = this.state.level;

    //Update Monster temporary variables
    getMonster(level).skills.map(e => mSkills.push(e)); //map over monster skills and push to mSkills array
    mZone.zone = 5;
    mZone.dir = 'center';
    mHands.left = getMonster(level).hands.left;
    mHands.right = getMonster(level).hands.right;
    mHands.both = getMonster(level).hands.both;
    mHands.tail = getMonster(level).hands.tail;
    mArmor = getMonster(level).armor;
    mStats.health = getMonster(level).stats.health;
    mStats.healthRegen = getMonster(level).stats.healthRegen;
    mStats.action = getMonster(level).stats.action;
    mStats.actionRegen = getMonster(level).stats.actionRegen;
    mStats.attack = getMonster(level).stats.attack;
    mStats.defense = getMonster(level).stats.defense;
    mStats.init = getMonster(level).stats.init;
    mStats.luck = getMonster(level).stats.luck; 
    mStats.speed = getMonster(level).stats.speed;

    //Monster State updates
    this.setState({mStats});
    this.setState({mZone});
    this.setState({mHands});
    this.setState({mArmor});
    this.setState({mGems});
    this.setState({mSkills});
    this.setState({monster: getMonster(level).name});
  }

  calcBonuses = (context) => {}

  calcInit = (context) => {}

  calcAttack = (context) => {}

  calcDefense = (context) => {}

  render() {  
    return (
      <div className="container">
        <Banner 
          level = {this.state.level}
          isNewGame = {this.state.isNewGame}
          beginGame = {this.beginGame}
        />

        <div className="wrapper">
          {!this.state.isNewGame ?  
            <CombatantPanel 
              name = {this.state.name}
              player = {this.state.player}
              sex = 'girl'
              skills = {this.state.pSkills}
              hands = {this.state.pHands}
              stats = {this.state.pStats}
              pZone = {this.state.pZone}
              mZone = {this.state.mZone}
              gems = {this.state.pGems}
              context = 'player'
              align = 'left'
            />
           : null
          }

          {!this.state.isNewGame 
            ?  
              <CombatantPanel 
                monster = {this.state.monster}
                skills = {this.state.mSkills}
                hands = {this.state.mHands}
                stats = {this.state.mStats}
                pZone = {this.state.pZone}
                mZone = {this.state.mZone}
                gems = {this.state.mGems}
                context = 'monster'
                align = 'right'
              />
           : null
          }
        </div>

        {!this.state.isNewGame 
          ?  
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
          : null
        }
      </div>
    )
  }
}

export default App;