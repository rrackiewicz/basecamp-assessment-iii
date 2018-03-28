import React from 'react';
import ImagePanel from './ImagePanel';
import Log from './Log';
import {getName} from '../helpers';
import {getMonster} from '../helpers';

class App extends React.Component {
  state = {
    pActed: false,
    mActed: false,
		pDefended: false,
    mDefended: false,
    pBaseHealth: 0,
    pHealth: 0,
    pAttack: 0,
    pAttackBonus: 0,
    pDefense: 0,
    pDefenseBonus: 0,
    pHealing: 0,
    pHealingBonus: 0,
    pLuck: 0,
    pLuckBonus: 0,
    mHitPoints: 0,
    mBaseHealth: 0,
    mHealth: 0,
    mAttack: 0,
    mAttackBonus: 0,
    mDefense: 0,
    mDefenseBonus: 0,
    mHealing: 0,
    mHealingBonus: 0,
    mLuck: 0,
    mLuckBonus: 0,
    pGems: {red: 0, blue: 0, green: 0, purple: 0},
    mGems: {red: 0, blue: 0, green: 0, purple: 0},
    pLog: [],
    mLog: [],
    isNewGame: true,
    whoseTurn: '',
    level: 0,
    name: '',
    player: '',
    monsters: ['mummy','troll','demon','treant','medusa','chimera','dragon'],
    monster: '',
    upgradePoints: 0
  }

  beginGame = () => {
    const monsters = this.state.monsters;
    const player = this.state.player;
    const sex = (Math.floor(Math.random()*2)) ? 'boy' : 'girl';
    const pGems = {...this.state.pGems}; //clone state 
    pGems['green'] = 1;

    this.setState({isNewGame: false});
    this.setState({pBaseHealth: 20});
    this.setState({pHealth: 20});
    this.setState({pAttack: 5});
    this.setState({pDefense: 1});
    this.setState({pHealing: 2});
    this.setState({pLuck: 1});
    this.setState({pGems});
    this.setState({mBaseHealth: 5});
    this.setState({mHealth: 5});
    this.setState({mAttack: 3});
    this.setState({mDefense: 1});
    this.setState({mHealing: 0});
    this.setState({mLuck: 0});
    this.setState({level: 1});
    this.setState({monster: getMonster(0)});
    this.setState({player: getName(sex)});
    this.setState({sex});
    this.setState({whoseTurn: 'player'})
  } 

  upgradeMonster() {

  }

  attack() {

  }

  render() {  
    return (
      <div className="container">
        <div className="jumbotron">
          <div className = "sign float-left">
            <h1 className="display-5">Ack Ack Monster Attack</h1>
            {/* Let's have each word appear in turn using SetTimeout */}
            <p className="lead">Ready. Set. Die.</p>
            {/* Let's have this toggle into quit button */}
            {this.state.isNewGame ? <a onClick={this.beginGame} className="btn btn-success btn-lg" href="#" role="button">Begin</a> : null}
          </div>
          {!this.state.isNewGame ? (
          <div className="level float-right rounded">
            <h1>Level {this.state.level}</h1>
          </div>
          ) : null}
        </div>
        <div className="wrapper">
          {!this.state.isNewGame ? ( 
            <ImagePanel 
              name = {this.state.name}
              player = {this.state.player}
              sex = {this.state.sex}
              attack = {this.state.pAttack}
              attackBonus = {this.state.pAttackBonus}
              defense = {this.state.pDefense}
              defenseBonus = {this.state.pDefenseBonus}
              healing = {this.state.pHealing}
              healingBonus = {this.state.pHealingBonus}
              luck = {this.state.pLuck}
              luckBonus = {this.state.pLuckBonus}
              gems = {this.state.pGems}
              health = {this.state.pHealth}
              context = 'player'
              align = 'left'
            />
          ) : null}

          {!this.state.isNewGame ? ( 
            <ImagePanel 
              monster = {this.state.monster}
              attack = {this.state.mAttack}
              attackBonus = {this.state.mAttackBonus}
              defense = {this.state.mDefense}
              defenseBonus = {this.state.mDefenseBonus}
              healing = {this.state.mHealing}
              healingBonus = {this.state.mHealingBonus}
              luck = {this.state.mLuck}
              luckBonus = {this.state.mLuckBonus}
              gems = {this.state.mGems}
              health = {this.state.mHealth}
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